import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.yourname = "Ammy";
    this.state = {};
  }

  sayhello(name) {
    return "Hello " + name
  } 
  render() {
    const myName = "Ansh";
    return (
      <div className="App">
        <h2> Just some sample data: {myName}</h2>
        <h2> Just some sample data: { 5+5}</h2>
        <h2> Just some sample data: { this.sayhello(myName)}</h2>
        <h2> Just some sample data: { this.yourname}</h2>
      </div>
    );
  }
}

export default App;
