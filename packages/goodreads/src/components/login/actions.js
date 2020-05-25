export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const doLogin = (username, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      email: username,
      password,
    },
  }
}
