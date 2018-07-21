import React from 'react';

const handleSubmit = (event, postName, history) => {
  event.preventDefault();
  postName();
  console.log(history);
  history.push('/user');
}

const Name = ({ name, setName, postName, history }) => (
  <section>
    <form onSubmit={(event) => handleSubmit(event, postName, history)}>
      <label>Enter your name</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button type="submit">Enter</button>
    </form>
  </section>
)

export default Name;