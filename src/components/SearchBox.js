import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='p2 ma4'>
      <input 
        className='pa3 ba b--blue bg-washed-blue'
        type="search" 
        placeholder='search robot' 
        onChange={ searchChange }
      />
    </div>
  );
}

export default SearchBox;