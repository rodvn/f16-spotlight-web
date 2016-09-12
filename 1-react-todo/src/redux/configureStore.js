import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from 'reducers';
import DevTools from 'redux/DevTools';

import { mobile } from 'libs/mobile';

let finalCreateStore;
if (!mobile && process.env.NODE_ENV !== 'production') {
  finalCreateStore = compose(
    autoRehydrate(),
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    DevTools.instrument({ maxAge: 30 }),
  )(createStore);
}
else {
  finalCreateStore = compose(
    autoRehydrate(),
    applyMiddleware(thunk),
  )(createStore);
}

export default function configureStore() {
  const InitialState = {};
  const store = finalCreateStore(rootReducer, InitialState);
  persistStore(store, {
    blacklist: ['ui'],
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
