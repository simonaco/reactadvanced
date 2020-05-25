// packages/goodreads/src/components/book-list/selectors.js
import { createSelector } from 'reselect'

const getMeta = (state) => state.books.meta
const getImages = (state) => state.books.images
const getRatings = (state) => state.books.ratings

export const getBooks = createSelector(
  [getMeta, getImages, getRatings],
  (meta, images, ratings) => {
    return meta.map((bookMeta, idx) => ({
      ...bookMeta,
      ...images[idx],
      ...ratings[idx],
    }))
  }
)