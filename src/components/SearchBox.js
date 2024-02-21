import React from 'react';


const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2"> 
            <input onChange={searchChange} className="pa3 bg-lightest-blue bw2 b-green" 
            type="search" 
            placeholer="search robots" />
        </div>
    );   
};

export default SearchBox;