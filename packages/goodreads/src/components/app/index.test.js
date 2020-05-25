import React from 'react'
import { createStore } from 'redux'
import { createRenderer } from '../../../test-utils'
import App from '.'
import reducer from './reducer'

describe('test suite for app component', () => {
  let fakeState
  const render = createRenderer(reducer, fakeState)
  beforeEach(() => {
    fakeState = {
      auth: {
        username: 'anonymous',
      },
      books: {
        isLoading: false,
        meta: [],
        images: [],
        booksInProgress: [],
        ratings: [],
      },
    }
  })
  it('renders app component and matches snapshot', () => {
    const store = createStore(() => fakeState)
    const component = render(<App />, { store })
    expect(component).toMatchSnapshot()
  })
})
