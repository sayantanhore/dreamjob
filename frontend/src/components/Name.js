import React from 'react';

const handleChange = (event) => {
  //this.setState({ name: event.target.value });
  //setName({ name: event.target.value });
}

const Name = ({ name, setName }) => (
  <section>
    <form>
      <label>Enter your name</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button>Enter</button>
    </form>
  </section>
)

export default Name;