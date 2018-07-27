import React from 'react';

const handleSubmit = (event, postName, history) => {
  event.preventDefault();
  postName();
  console.log(history);
  //history.push('/user');
}

const Name = ({ name, setName, postName, history }) => (
  <section>
    <label>Enter your name</label>
    <input type="text" value={name} onChange={(event) => setName(event.currentTarget.value)} />
    <button type="submit" disabled={!name} onClick={postName}>Enter</button>
  </section>
)

export default Name;