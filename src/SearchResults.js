import React from "react";

const SearchResults = ({ song, id, addToTracklist  }) => {
    return (
        <>
            <div key={id}>
                <h3>{song[0]}</h3>
                <p>{song[2]} | {song[3]}</p>
            </div>
            <div>
                <button onClick={() => addToTracklist(song)}>Add</button>
            </div>
        </>

    )
}

export default SearchResults;