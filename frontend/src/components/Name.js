import React from 'react';
import axios from 'axios';

const handleSubmit = (event, postName) => {
  event.preventDefault();
  postName();
}

const Name = ({ name, setName, postName }) => (
  <section>
    <form onSubmit={(event) => handleSubmit(event, postName)}>
      <label>Enter your name</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button type="submit">Enter</button>
    </form>
  </section>
)

export default Name;