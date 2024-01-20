// Search button necessary

import React, {useState} from "react";

export default function SearchBar() {
    const [search, setSearch] = useState('');

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <form>
                <input id='searchbar' type='text' placeholder="Search for your favorite artists, songs, or albums" value={search} onChange={handleSearchInput} style={{width: 300}}/>
                <button>Search</button>
            </form>
        </>
    )
}