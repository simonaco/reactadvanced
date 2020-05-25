import {
  FETCH_META_REQUEST,
  FETCH_META_SUCCEEDED,
  FETCH_META_FAILED,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCEEDED,
  FETCH_IMAGES_FAILED,
  FETCH_RATINGS_REQUEST,
  FETCH_RATINGS_SUCCEEDED,
  FETCH_RATINGS_FAILED,
  FETCH_BOOKS_IN_PROGRESS_REQUEST,
  FETCH_BOOKS_IN_PROGRESS_SUCCEEDED,
  FETCH_BOOKS_IN_PROGRESS_FAILED,
} from './actions'

const initialState = {
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

export default function books(state = initialState, action) {
  switch (action.type) {
    case FETCH_META_REQUEST: {
      return {
        ...state,
        isLoadingMeta: true,
      }
    }
    case FETCH_META_SUCCEEDED: {
      return {
        ...state,
        meta: action.payload.meta,
        isLoadingMeta: false,
      }
    }
    case FETCH_META_FAILED: {
      return {
        ...state,
        isLoadingMeta: false,
        errorMeta: action.payload.error,
      }
    }
    case FETCH_IMAGES_REQUEST: {
      return {
        ...state,
        isLoadingImages: true,
      }
    }
    case FETCH_IMAGES_SUCCEEDED: {
      return {
        ...state,
        images: action.payload.images,
        isLoadingImages: false,
      }
    }
    case FETCH_IMAGES_FAILED: {
      return {
        ...state,
        isLoadingImages: false,
        errorImages: action.payload.error,
      }
    }
    case FETCH_RATINGS_REQUEST: {
      return {
        ...state,
        isLoadingRatings: true,
      }
    }
    case FETCH_RATINGS_SUCCEEDED: {
      return {
        ...state,
        ratings: action.payload.ratings,
        isLoadingRatings: false,
      }
    }
    case FETCH_RATINGS_FAILED: {
      return {
        ...state,
        isLoadingRatings: false,
        errorRatings: action.payload.error,
      }
    }
    case FETCH_BOOKS_IN_PROGRESS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_BOOKS_IN_PROGRESS_SUCCEEDED: {
      return {
        ...state,
        booksInProgress: action.payload.booksInProgress,
        isLoading: false,
      }
    }
    case FETCH_BOOKS_IN_PROGRESS_FAILED: {
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
