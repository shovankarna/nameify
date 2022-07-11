import React from 'react';
import './searchbox.css'

const SearchBox = ({ onInputChange }) => {
    return (
        <div className='search-container'>
            <input onChange={onInputChange}
                placeholder='Type keywords here!'
                className='search-input' />
        </div>
    )
}

export default SearchBox;