import axios from 'axios';
import { post } from './data';

export const postName = store => next => action => {
  console.log(action)
  
  if (action.type === 'POST_NAME') {
    console.log(action.name);
    post('http://localhost:3333/new', {
      name: action.name
    }).then(() => {
      console.log('hello');
    });
  }
  
  return next(action);
}