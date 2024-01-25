import React from "react";

const SearchResults = ({ song, id }) => {
    console.log(id);
    return (
        <div key={id}>
            <h3>{song[0]}</h3>
            <p>{song[2]} | {song[3]}</p>
        </div>
    )
}

export default SearchResults;