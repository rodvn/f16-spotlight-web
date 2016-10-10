export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export function setLoggedIn(payload) {
  return {
    type: SET_LOGGED_IN,
    payload,
  };
}

export const SET_LOGGING_IN = 'SET_LOGGING_IN';
export function setLoggingIn(payload) {
  return {
    type: SET_LOGGING_IN,
    payload,
  };
}

export const SET_LOGIN_FAILED = 'SET_LOGIN_FAILED';
export function setLoginFailed(payload) {
  return {
    type: SET_LOGIN_FAILED,
    payload,
  };
}

export function login() {
  return (dispatch, getState) => {
    dispatch(setLoggingIn(true));
    const {
      username,
      password,
    } = getState().user;
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(res => res.json())
    .then((json) => {
      dispatch(setLoggedIn(false));
    });
  }
}
