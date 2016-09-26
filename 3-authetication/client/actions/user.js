export const SET_USERNAME = 'SET_USERNAME';
export function setUserName(payload) {
  return {
    type: SET_USERNAME,
    payload,
  }
}

export const SET_PASSWORD = 'SET_PASSWORD';
export function setPassword(payload) {
  return {
    type: SET_PASSWORD,
    payload,
  }
}
