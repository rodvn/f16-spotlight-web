import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';
import 'whatwg-fetch';

import DevTools from 'redux/DevTools';
import configureStore from 'redux/configureStore';

import App from 'containers/App';

FastClick.attach(document.body);

const store = window.store = configureStore();

const renderDevTools = () => {
  if (process.env.NODE_ENV !== 'production') {
    return <DevTools />;
  }

  return null;
};

render(
  <Provider store={store}>
    <div>
      <App />
      { renderDevTools() }
    </div>
  </Provider>,
  document.getElementById('root')
);
