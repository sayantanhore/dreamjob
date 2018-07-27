import axios from 'axios';

export const setName = (name) => ({
  type: 'SET_NAME',
  name
});

export const postName = (name) => ({
  type: 'POST_NAME',
  name
})

export const changeState = () => ({
  type: 'CHANGE_STATE'
})

export const noChangeState = () => ({
  type: 'NO_CHANGE_STATE'
})