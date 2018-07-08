import React, { Component } from 'react';
import AppBar from './AppBar';
import Name from './Name';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Name />
      </div>
    );
  }
}

export default App;
