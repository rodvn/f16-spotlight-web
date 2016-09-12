import { createSelector } from 'reselect';
import _ from 'lodash';

import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODO_COMPLETE,
} from 'actions/todos';

const InitialState = {
  todos: {},
};

function todos(state = InitialState.todos, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        [action.payload.key]: action.payload,
      };
    case DELETE_TODO: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    case SET_TODO_COMPLETE:
      return {
        ...state,
        [action.payload.key]: action.payload,
      };
    default:
      return state;
  }
}

export const todoSelector = createSelector(
  state => state.ui.route.name,
  state => state.todos,
  (route, all) => {
    switch (route) {
      case 'all':
        return _(all)
          .map(todo => todo)
          .reverse()
          .value();
      case 'incomplete':
        return _(all)
          .map(todo => todo)
          .filter(todo => !todo.complete)
          .reverse()
          .value();
      case 'complete':
        return all
          .map(todo => todo)
          .filter(todo => todo.complete)
          .reverse()
          .value();
      default:
        return [];
    }
  }
);

export default todos;
