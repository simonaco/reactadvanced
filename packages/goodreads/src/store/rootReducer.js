import { combineReducers } from 'redux'
import appReducer from '../components/app/reducer'
import booksReducer from '../components/book-list/reducer'
import loginReducer from '../components/login/reducer'
import registerReducer from '../components/register/reducer'
import authCheckerReducer from '../containers/auth-checker/reducer'

export default combineReducers({
  app: appReducer,
  books: booksReducer,
  login: loginReducer,
  register: registerReducer,
  auth: authCheckerReducer,
})
