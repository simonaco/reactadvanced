import { takeLatest } from 'redux-saga/effects'
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_IN_PROGRESS_REQUEST,
} from '../../components/book-list/actions'
import { LOGIN_REQUEST } from '../../components/login/actions'
import { REGISTRATION_REQUEST } from '../../components/register/actions'
import { CHECK_AUTH_REQUEST } from '../../containers/auth-checker/actions'
import { watchBooks } from './books'
import { watchBooksProgress } from './booksInProgress'
import { watchLogin, watchRegistration, watchAuth } from './login'

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, watchLogin)
  yield takeLatest(REGISTRATION_REQUEST, watchRegistration)
  yield takeLatest(CHECK_AUTH_REQUEST, watchAuth)
  yield takeLatest(FETCH_BOOKS_REQUEST, watchBooks)
  yield takeLatest(FETCH_BOOKS_IN_PROGRESS_REQUEST, watchBooksProgress)
}
