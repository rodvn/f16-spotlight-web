import createHistory from 'history/createBrowserHistory';
import uniloc from 'uniloc';

export const history = createHistory();

export const Router = uniloc(
  {
    all: 'GET /',
    incomplete: 'GET /incomplete',
    completed: 'GET /completed',
  },
);
