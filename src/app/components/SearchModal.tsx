"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './songSearch.css';

interface ISearchModal {
    searchQuery: string
}

const SearchModal: React.FC<ISearchModal> = ({searchQuery}) => {
    const [searchVal, setSearchVal] = useState("");
    const router = useRouter();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchVal !== "") {
            router.push("/songs?searching=true&search=" + searchVal);
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={() => router.push("/songs")}>
                    &times;
                </button>
                <h2>Search</h2>
                <input
                    type="text"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search..."
                    className="search-input"
                />
                <div className="search-results">
                    {searchQuery && 
                        <p>Showing results for: {searchQuery}</p>
                    }
                </div>
            </div>
        </div>
    );
};


export default SearchModal;