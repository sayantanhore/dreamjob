import React, { Component } from 'react';
//import store from './store';
import AppBar from './AppBar';
import Name from './components/Name';
import Applicant from './containers/Applicant';
import logo from './logo.svg';
import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Applicant />
      </div>
    );
  }
}*/

const App = () => (
  <div className="App">
    <AppBar />
    <Applicant />
  </div>
);

export default App;
