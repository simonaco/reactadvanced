import books from '../reducer'

let initialState = {}
describe('book reducer', () => {
  beforeEach(() => {
    initialState = {
      meta: [],
      ratings: [],
      images: [],
      isLoadingMeta: false,
      isLoadingRatings: false,
      isLoadingImages: false,
      errorMeta: null,
      errorRatings: null,
      errorImages: null,
    }
  })

  it('works mutates state on fetch meta', () => {
    const action = { type: 'FETCH_META_REQUEST' }
    const expected = { ...initialState, isLoadingMeta: true }
    expect(books(initialState, action)).toEqual(expected)
  })
})
