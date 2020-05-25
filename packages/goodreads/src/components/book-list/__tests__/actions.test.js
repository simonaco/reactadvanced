// packages/goodreads/src/components/book-list/__tests__/actions.test.js
import { FETCH_IMAGES_REQUEST } from '../actions'
import { fetchImages } from '../actions'

test('creates a fetch action', () => {
  const expected = { type: FETCH_IMAGES_REQUEST }
  expect(fetchImages()).toEqual(expected)
})
