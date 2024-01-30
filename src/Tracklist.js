// Save to Spotify button necessary
import React from "react";

 const Tracklist = ({ track, removeTrack }) => {
    return (
        <>
            <h3>{track[0]}</h3>
            <p>{track[2]} | {track[3]}</p>
            <button onClick={() => removeTrack(track[1])}>Remove</button>
        </>
    )
}

export default Tracklist;