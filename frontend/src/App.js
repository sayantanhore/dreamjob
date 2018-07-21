import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar';
import Name from './components/Name';
import Applicant from './containers/Applicant';
import Abilities from './containers/Abilities';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <AppBar />
    <Switch>
      <Route exact path="/" component={ Applicant } />
      <Route path="/user" component={ Abilities } />
    </Switch>
  </div>
);

export default App;
