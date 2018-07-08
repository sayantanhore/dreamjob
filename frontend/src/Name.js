import React, { Component } from 'react';
import axios from 'axios';
import './Name.css'

class Name extends Component {
constructor(props) {
  super(props);
  this.state = { name: ''};
}

handleChange(event) {
  this.setState({ name: event.target.value });
}

handleSubmit(event) {
  axios.post('http://localhost:3333/new', {
    name: this.state.name
  }).then((response) => {
    console.log(response);
  });
  event.preventDefault();
}

 render() {
  return (
    <section>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <label>Enter your name</label>
      <input type="text" onChange={this.handleChange.bind(this)}/>
      <button>Enter</button>
      </form>
    </section>
  );
 }
}

export default Name;