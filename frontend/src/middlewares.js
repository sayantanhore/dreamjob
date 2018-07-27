import { post } from './data';
import { changeState } from './actions';

export const postName = store => next => action => {
  console.log(action)
  
  if (action.type === 'POST_NAME') {
    console.log(action.name);
    post('http://localhost:3333/new', {
      name: action.name
    }).then(() => {
      console.log('hello');
      next(changeState());
    });
  }
  
  return next(action);
}