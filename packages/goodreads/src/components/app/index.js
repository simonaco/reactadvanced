import React from 'react'
import { components } from '@goodreads-v2/component-library'
import './index.css'
import BookList from '../book-list'

const { NavBar } = components

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{ height: '70vh' }}>
        <BookList />
      </main>
    </div>
  )
}

export default App
