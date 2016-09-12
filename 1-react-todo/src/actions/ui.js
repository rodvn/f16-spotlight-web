export const SET_TODO_INPUT_VALUE = 'SET_TODO_INPUT_VALUE';
export function setTodoInputValue(payload) {
  return {
    type: SET_TODO_INPUT_VALUE,
    payload,
  };
}
