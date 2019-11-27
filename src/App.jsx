import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
import SortedList from './components/SortedList.jsx';
import LanguageList from './components/LanguageList.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import Keywords from './components/Keywords.jsx';
import lda from './lda';
import { Alert, Grid } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'

const mystyle = {
  color: "grey",
  padding: "60px",
  fontFamily: "sans-serif",
  fontSize: "25px",
  textAlign: "center"
};

const sectionStyles = {
  color: "white",
  padding: "10px",
  fontFamily: "sans-serif"
};

const headerStyle = {
  color: "black",
  backgroundColor: "MediumAquaMarine",
  padding: "10px",
  fontFamily: "Arial"
};

const headerSpecific = {
  color: "white",
  padding: "10px",
  fontFamily: "sans-serif",
  fontSize: "45px"
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
      infoclean : '',
      formData: {
        username: '',
      },
      repitems: null,
      staritems: null,
      replanguagecount: {},
      keywords: null
    }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);
  }

  handleUserFormSubmit(event) {
    event.preventDefault();
       axios.get('https://api.github.com/users/'+this.state.formData.username)
    .then(response => this.setState({
      gitun: response.data.login,
      infoclean: response.data,
      info : JSON.stringify(response.data, undefined, 2)
  })).catch((err) => { console.log(err); });
  axios.get('https://api.github.com/users/' + this.state.formData.username + '/repos')
    .then(response => {
        var itemsWithFalseForks = response.data.filter(item => item.fork === false)
        var sortedItems = itemsWithFalseForks.sort((b, a) => {
            if ((a.watchers_count + a.forks_count) < (b.forks_count + b.watchers_count)) {
                return -1
            } else if ((a.watchers_count + a.forks_count) > (b.forks_count + b.watchers_count)) {
                return 1
            } else {
                return 0
            }
        })
        let dictrlc = Object.assign({}, this.state.replanguagecount);
        for (var i = 0; i < itemsWithFalseForks.length; i++) {
            dictrlc[itemsWithFalseForks[i]['language']] = -~dictrlc[itemsWithFalseForks[i]['language']]
        }
        this.setState({
            repitems: sortedItems.slice(0, 10),
            replanguagecount: dictrlc,
        })
    }).catch((err) => { console.log(err); })
axios.get('https://api.github.com/users/' + this.state.formData.username + '/starred')
    .then(response => {
        var itemsWithFalseForks = response.data.filter(item => item.fork === false)
        var sortedItems = itemsWithFalseForks.sort((b, a) => {
            if ((a.watchers_count + a.forks_count) < (b.forks_count + b.watchers_count)) {
                return -1
            } else if ((a.watchers_count + a.forks_count) > (b.forks_count + b.watchers_count)) {
                return 1
            } else {
                return 0
            }
        })
        var documents = []
        for (var i = 0; i < response.data.length; i++) {
            var descr = response.data[i]['description']
            if (descr != null) {
                var newtext = descr.match(/[^.!?]+[.!?]+/g)
                if (newtext != null) {
                    documents = documents.concat(newtext)
                }
            }
        }
        var result = lda(documents, 3, 3);
        var keywords = new Set()
        for (var k = 0; k < 3; k++) {
            for (var j = 0; j < 3; j++) {
                keywords = keywords.add(result[k][j]['term']);
            }
        }
        this.setState({
            staritems: sortedItems.slice(0, 10),
            keywords: Array.from(keywords).join(', ')
        })
    }).catch((err) => { console.log(err); })
 };


  handleFormChange(event) {
      const obj = this.state.formData;
      obj[event.target.name] = event.target.value;
      this.setState(obj);
  };


  render() {
    return(
      <div className="App">
        <header className="App-header">
          <nav class="navbar bg-warning navbar-dar">
              <h1><a style={headerSpecific} class="navbar-brand" href="#">Github API Analytics</a></h1>
              <div>
                <Form
                  formData={this.state.formData}
                  handleUserFormSubmit={this.handleUserFormSubmit}
                  handleFormChange={this.handleFormChange}
                />
              </div>
          </nav>
        </header>
      <div>
        <p class="container" style={mystyle} className="App-intro">
          This site provides information on GitHub user accounts.
        </p>
      </div>
      <Row className="show-grid">
        <Col xs={12} md={14} className="text-center">
          <div class="container">
                <ProfileDetails infoclean={this.state.infoclean}/>
          </div>
        </Col>
      </Row>
      <hr></hr>
      <div class="container">
              <h1 class="font-weight-bold">Own Repositories</h1>
      <SortedList repitems={this.state.repitems} />
      </div>
      <hr></hr>
      <div class="container">
          <h1 class="font-weight-bold">Own Repos Language Count</h1>
      <LanguageList class="container" langslist={this.state.replanguagecount} />
      </div>
      <hr></hr>
    </div>
    );
  }
}
export default App;
