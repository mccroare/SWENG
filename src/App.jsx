import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';

const mystyle = {
  color: "white",
  backgroundColor: "Black",
  padding: "10px",
  fontFamily: "Arial"
};

const headerStyle = {
  color: "black",
  backgroundColor: "MediumAquaMarine",
  padding: "10px",
  fontFamily: "Arial"
};

const headerSpecific = {
  color: "white",
  backgroundColor: "MediumAquaMarine",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center",
  fontSize: "40px"
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
      <div style={headerStyle} className="App">
        <header style={headerSpecific} className="App-header">
          <h1 className="App-title"> GitHub Analytics</h1>
        </header>
        <h3><p style={mystyle} className="App-intro">
          This site provides information on GitHub users accounts.
        </p></h3>
        <div>
          <Form
            formData={this.state.formData}
            handleUserFormSubmit={this.handleUserFormSubmit}
            handleFormChange={this.handleFormChange}
          />
        </div>
        <div>
          <ProfileDetails infoclean={this.state.infoclean}/>
        </div>
</div>
    );
  }
}
export default App;
