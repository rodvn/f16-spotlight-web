import { combineReducers } from 'redux';
import { Router } from 'libs/routing';

import {
  SET_PATHNAME,
} from 'actions/routing';

import {
  SET_TODO_INPUT_VALUE,
} from 'actions/ui';

import {
  REHYDRATE,
} from 'redux-persist/constants';

const InitialState = {
  route: {
    name: 'all',
    options: {},
    action: undefined,
    hash: '',
  },
  hydrated: false,
  inputValue: '',
};

function route(state = InitialState.route, action = {}) {
  if (action.type === SET_PATHNAME) {
    return {
      ...Router.lookup(action.payload.pathname),
      action: action.payload.action,
      key: action.payload.key,
      hash: location.hash,
    };
  }
  return state;
}

function hydrated(state = InitialState.hydrated, action = {}) {
  if (action.type === REHYDRATE) {
    return true;
  }
  return state;
}

function inputValue(state = InitialState.inputValue, action = {}) {
  if (action.type === SET_TODO_INPUT_VALUE) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  route,
  hydrated,
  inputValue,
});
