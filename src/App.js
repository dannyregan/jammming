import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResults from './SearchResults'

function App() {

  const [results, setResults] = useState([]);

  const addResults = (result, key, artist, album) => {
      setResults(results => [...results, [result, key, artist, album]]);
  };


  return (
    <>
      <h1>Jammming</h1>
      <SearchBar addResults={addResults} setResults={setResults}/>
      <h2>Results</h2>
      {results.map(result => <SearchResults song={result} id={result[1]}/> )}
    </>
  );
}

export default App;