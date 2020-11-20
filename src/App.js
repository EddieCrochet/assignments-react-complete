import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {
  state = {
    outputs: [
      {username: "diabloHunter69"},
      {username: "killa"},
      {username: "typhoon"}
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState({
      outputs: [
        {username: event.target.value},
        {username: "skrilla"},
        {username: "genesis"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserInput 
            currentName={this.state.outputs[0].username}
            changed={this.usernameChangedHandler}/>
          <UserOutput
            username={this.state.outputs[0].username}/>
          <UserOutput 
            username={this.state.outputs[1].username}><p>This is another out put!</p></UserOutput>
          <UserOutput
            username={this.state.outputs[2].username}/>
        </header>
      </div>
    );
  }
}

export default App;
