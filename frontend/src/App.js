import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from './AppBar';
import Name from './components/Name';
import Applicant from './containers/Applicant';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <AppBar />
    <Router>
      <Route path="/" component={Applicant} />
    </Router>
  </div>
);

export default App;
