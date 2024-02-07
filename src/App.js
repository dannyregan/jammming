import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from './SearchResults'
import Tracklist from "./Tracklist";
import LogIn from "./LogIn";

function App() {

  const [results, setResults] = useState([]);

  const addResults = (result, key, artist, album) => {
      setResults(results => [...results, [result, key, artist, album]]);
  };

  const [tracklistTitle, setTracklistTitle] = useState('Your Playlist');
  const changeTitle = (e) => {
    setTracklistTitle(e.target.value);
  }

  const [tracklist, setTracklist] = useState([]);

  const addToTracklist = (track) => {
    setTracklist(tracklist => [...tracklist, track])
  }

  const removeTrack = (id) => {
    setTracklist(tracklist.filter(track => track[1] !== id))
  }

  return (
    <>
      <h1>Jammming</h1>
      <LogIn />
      <SearchBar addResults={addResults} setResults={setResults}/>
      <h2>Results</h2>
      {results.map(result => <SearchResults song={result} id={result[1]} addToTracklist={addToTracklist}/> )}
      <input onChange={changeTitle} value={tracklistTitle} type='text' placeholder={tracklistTitle}></input>
      {tracklist.map(track => <Tracklist track={track} removeTrack={removeTrack} />)}
    </>
  );
}

export default App;