import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import FilmList from './components/FilmList.jsx'

function App() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <>
    <h1>FilmFinder</h1>
    <SearchBar setSearchTerm={setSearchTerm}/>
    <FilmList searchTerm={searchTerm} apiKey={apiKey}/>
    </>
  )
}

export default App
