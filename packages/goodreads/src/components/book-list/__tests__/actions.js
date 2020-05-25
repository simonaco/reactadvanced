import { FETCH_BOOKS_REQUEST } from '../actions'
import { fetchBooks } from '../actions'

test('creates a fetch action', () => {
  const expected = { type: FETCH_BOOKS_REQUEST }
  expect(fetchBooks()).toEqual(expected)
})
