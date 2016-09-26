import shortid from 'shortid';

export const ADD_TODO = 'ADD_TODO';
export function addTodo(todo) {
  const payload = {
    key: shortid.generate(),
    text: todo,
    complete: false,
  };
  return {
    type: ADD_TODO,
    payload,
  };
}

export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}

export const SET_TODO_COMPLETE = 'SET_TODO_COMPLETE';
export function setTodoComplete(payload) {
  return {
    type: SET_TODO_COMPLETE,
    payload,
  };
}
