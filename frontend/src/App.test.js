import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const htmlStr = `
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  `;
  ReactDOM.render(htmlStr, div);
  ReactDOM.unmountComponentAtNode(div);
});
