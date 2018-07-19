import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import { postName } from './middlewares';
//import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

//const store = createStore(reducers, applyMiddleware(postName));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
