import { takeLatest } from 'redux-saga/effects'
import { FETCH_META_REQUEST } from '../../components/book-list/actions'
import { FETCH_RATINGS_REQUEST } from '../../components/book-list/actions'
import { FETCH_IMAGES_REQUEST } from '../../components/book-list/actions'
import { LOGIN_REQUEST } from '../../components/login/actions'
import { REGISTRATION_REQUEST } from '../../components/register/actions'
import { watchBookMeta } from './books'
import { watchBookImages } from './books'
import { watchBookRatings } from './books'
import { watchLogin, watchRegistration } from './login'

export default function* rootSaga() {
  yield takeLatest(FETCH_META_REQUEST, watchBookMeta)
  yield takeLatest(FETCH_RATINGS_REQUEST, watchBookRatings)
  yield takeLatest(FETCH_IMAGES_REQUEST, watchBookImages)
  yield takeLatest(LOGIN_REQUEST, watchLogin)
  yield takeLatest(REGISTRATION_REQUEST, watchRegistration)
}
