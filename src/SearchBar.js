import React, {useState} from "react";
import musicData from "./data";

export default function SearchBar({ addResults }) {

    const [search, setSearch] = useState('');

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < musicData.length; i++) {
            if (musicData[i].song.includes(search)) {
                addResults(musicData[i].song, musicData[i].id, musicData[i].artist, musicData[i].album);
            }
        }
        setSearch('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id='searchbar' type='text' placeholder="Search for your favorite artists, songs, or albums" value={search} onChange={handleSearchInput} style={{width: 300}}/>
                <button>Search</button>
            </form>
        </>
    )
}