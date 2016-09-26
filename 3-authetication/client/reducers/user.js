import { combineReducers } from 'redux';

import {
  SET_USERNAME,
  SET_PASSWORD,
} from 'actions/user';

const InitialState = {
  username: '',
  password: '',
};

function username(state = InitialState.username, action = {}) {
  if (action.type === SET_USERNAME) {
    return action.payload;
  }
  return state;
}

function password(state = InitialState.password, action = {}) {
  if (action.type === SET_PASSWORD) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  username,
  password,
});
