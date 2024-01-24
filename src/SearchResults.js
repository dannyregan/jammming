import React from "react";

const SearchResults = ({ song, key }) => {
    return (
        <div>
            <h3 key={key}>{song[0]}</h3>
            <p>{song[2]} | {song[3]}</p>
        </div>
    )
}

export default SearchResults;