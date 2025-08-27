import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import FilmList from './components/FilmList.jsx'

function App() {

  return (
    <>
    <h1>FilmFinder</h1>
    <SearchBar />
    <FilmList />
    </>
  )
}

export default App
