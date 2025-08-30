import { useState, useRef } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import FilmList from './components/FilmList.jsx'
import WatchList from './components/WatchList.jsx';
import usePersistedState from './hooks/usePersistedState.js';

function App() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [searchTerm, setSearchTerm] = useState('')
  const [watchList, setWatchList] = usePersistedState('watchList', [])
  const inputRef = useRef()

  const focus = () => {
    inputRef.current.focus()
  }

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <>
    <h1 onClick={refreshPage}>FilmFinder</h1>
    <SearchBar setSearchTerm={setSearchTerm} inputRef={inputRef}/>
    <FilmList searchTerm={searchTerm} apiKey={apiKey} setWatchList={setWatchList} focus={focus}/>
    <WatchList watchList={watchList} setWatchList={setWatchList}/>
    </>
  )
}

export default App
