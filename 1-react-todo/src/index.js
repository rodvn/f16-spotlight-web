import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';

import 'velocity-animate';
import 'velocity-animate/velocity.ui';

import DevTools from 'redux/DevTools';
import configureStore from 'redux/configureStore';

import { mobile } from 'libs/mobile';
import { setupRouter } from 'actions/routing';

import App from 'containers/App';
import styles from 'styles';

FastClick.attach(document.body);

const store = window.store = configureStore();
setupRouter();

const renderDevTools = () => {
  if (!mobile && process.env.NODE_ENV !== 'production') {
    return <DevTools />;
  }

  return null;
};

render(
  <Provider store={store}>
    <div style={styles.root}>
      <App />
      { renderDevTools() }
    </div>
  </Provider>,
  document.getElementById('root')
);
