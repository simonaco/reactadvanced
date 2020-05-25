import React from 'react'
import { components, typography } from '@goodreads-v2/component-library'
import './index.css'
import BookList from '../book-list'

const { Artifika } = typography
const { NavBar } = components

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{ height: '70vh' }}>
        <Artifika tag="h1">Books</Artifika>
        <BookList />
      </main>
    </div>
  )
}

export default App
