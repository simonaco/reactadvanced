import { LOGIN_REQUEST, LOGIN_SUCCEEDED, LOGIN_FAILED } from './actions'

const initialState = {
  isLoading: false,
  success: null,
  error: null,
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOGIN_SUCCEEDED: {
      return {
        ...state,
        success: action.payload.msg,
        isLoading: false,
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    }
    default: {
      return state
    }
  }
}
