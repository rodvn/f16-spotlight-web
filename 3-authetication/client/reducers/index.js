import { combineReducers } from 'redux';

import ui from 'reducers/ui';
import user from 'reducers/user';

export default combineReducers({
  ui,
  user,
});
