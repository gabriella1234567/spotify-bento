import './App.css'
import SearchResult from './components/SearchResult';
import useApiFetch from './hooks/useApiFetch'
import { useState } from 'react';

function App() {
  const token = useApiFetch();
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div id="header">
      <h1>Spotify Search</h1>
      <input
        type="search"
        placeholder="Start typing to search, results will appear below 👇"
        onChange={handleSearchChange}
        value={search}
      />
      </div>
  
    <div id="search-results">
        <SearchResult searchQuery={search} type="artist" />
        <SearchResult searchQuery={search} type="track" />
        <SearchResult searchQuery={search} type="album" />
        <SearchResult searchQuery={search} type="playlist" />
        <SearchResult searchQuery={search} type="show" />
        <SearchResult searchQuery={search} type="episode" />
      </div>
    </>
  )
}

export default App
