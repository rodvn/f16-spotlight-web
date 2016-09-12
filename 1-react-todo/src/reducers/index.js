import { combineReducers } from 'redux';

import ui from 'reducers/ui';
import todos from 'reducers/todos';

export default combineReducers({
  ui,
  todos,
});
