import React, { Component, Fragment } from 'react'
import { fetchBooks, fetchBooksInProgress } from './actions'
import { connect } from 'react-redux'
import { components, typography } from '@goodreads-v2/component-library'
import { getBooks, getBooksProgress } from './selectors'

const { BookGrid, BookCard } = components
const { Artifika, Body } = typography

class BookList extends Component {
  static defaultProps = {
    images: [],
    ratings: [],
    booksInProgress: [],
  }

  componentDidUpdate = (prevProps) => {
    const { username: prevUsername } = prevProps
    const { dispatch, username } = this.props
    if (prevUsername !== username) {
      dispatch(fetchBooksInProgress(username))
    }
  }

  componentDidMount = () => {
    const { dispatch, authenticated, username } = this.props
    dispatch(fetchBooks())
    if (authenticated) {
      dispatch(fetchBooksInProgress(username))
    }
  }

  render() {
    const { books, booksInProgress, authenticated } = this.props
    return (
      <Fragment>
        {authenticated && (
          <Fragment>
            <Artifika>Currently reading</Artifika>
            {booksInProgress.length ? (
              <BookGrid>
                {booksInProgress.map((book) => (
                  <BookCard
                    key={`${book.id}${book.title}`}
                    authenticated={authenticated}
                    {...book}
                  />
                ))}
              </BookGrid>
            ) : (
              <div>
                <Body tag="h6">Nothing to show here...yet :(</Body>
              </div>
            )}
          </Fragment>
        )}
        <Artifika>Books</Artifika>
        <BookGrid>
          {books.map((book) => (
            <BookCard
              key={`${book.id}${book.title}`}
              authenticated={authenticated}
              {...book}
            />
          ))}
        </BookGrid>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const {
    isLoadingImages,
    isLoadingRatings,
    isLoadingMeta,
    errorRatings,
    errorMeta,
    errorImages,
  } = state.books
  const { username, error: authError } = state.auth
  const authenticated = authError === null
  const books = getBooks(state)
  const booksInProgress = getBooksProgress(state)
  return {
    books,
    isLoadingImages,
    isLoadingRatings,
    isLoadingMeta,
    errorRatings,
    errorImages,
    errorMeta,
    username,
    authenticated,
    booksInProgress,
  }
}

export default connect(mapStateToProps)(BookList)
