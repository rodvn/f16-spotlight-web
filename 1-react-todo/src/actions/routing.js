import { history } from 'libs/routing';

export const SET_PATHNAME = 'SET_PATHNAME';
export function setPathname(payload) {
  return {
    type: SET_PATHNAME,
    payload,
  };
}

export function setupRouter() {
  const dispatch = window.store.dispatch;
  dispatch(setPathname(history.location));
  history.listen((location) => {
    dispatch(setPathname(location));
  });
}

export function push(route) {
  return () => history.push(route);
}
