export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED'
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED'

export const doRegister = (username, password) => ({
  type: REGISTRATION_REQUEST,
  payload: {
    email: username,
    password,
  },
})
