import React, {useState} from "react";
import musicData from "./data";

export default function SearchBar({ addResults, setResults }) {

    const [search, setSearch] = useState('');

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        if (search !== '') {
            e.preventDefault();
            setResults([]);
            for (let i = 0; i < musicData.length; i++) {
                if (musicData[i].song.includes(search) || musicData[i].artist.includes(search) || musicData[i].album.includes(search)) {
                    addResults(musicData[i].song, musicData[i].id, musicData[i].artist, musicData[i].album);
                }
            }
        } else {
            e.preventDefault();
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