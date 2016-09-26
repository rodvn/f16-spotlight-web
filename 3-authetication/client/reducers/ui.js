import { combineReducers } from 'redux';

import {
  SET_LOGGED_IN,
  SET_LOGGING_IN,
  SET_LOGIN_FAILED,
} from 'actions/ui';

const InitialState = {
  loggedIn: false,
  loggingIn: false,
  loginFailed: false,
};

function loggedIn(state = InitialState.loggedIn, action = {}) {
  if (action.type === SET_LOGGED_IN) {
    return action.payload;
  }
  return state;
}

function loggingIn(state = InitialState.loggingIn, action = {}) {
  if (action.type === SET_LOGGING_IN) {
    return action.payload;
  }
  return state;
}

function loginFailed(state = InitialState.loginFailed, action = {}) {
  if (action.type === SET_LOGIN_FAILED) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  loggedIn,
  loggingIn,
  loginFailed,
});
