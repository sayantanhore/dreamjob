import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { postName } from './middlewares';

export default createStore(reducers, applyMiddleware(postName));