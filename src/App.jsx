import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';

const mystyle = {
  color: "grey",
  padding: "60px",
  fontFamily: "sans-serif",
  fontSize: "25px",
  textAlign: "center"
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
    })).catch((err) => { console.log(err); });
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
              <h1><a style={headerSpecific} class="navbar-brand" href="#">Github Analytics</a></h1>
              <div>
                <Form
                  formData={this.state.formData}
                  handleUserFormSubmit={this.handleUserFormSubmit}
                  handleFormChange={this.handleFormChange}
                />
              </div>
          </nav>
        </header>
        <p class="container" style={mystyle} className="App-intro">
          This site provides information on GitHub user accounts.
        </p>
          <div class="container">
            <ProfileDetails infoclean={this.state.infoclean}/>
          </div>
        </div>

    );
  }
}
export default App;
