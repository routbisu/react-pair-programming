import React from 'react';
import './Search.scss';

function Search(props) {
  const { query, onQueryChange } = props;

  return (
    <form className='Search-form'>
      <input
        id='search-input'
        className='Search-input'
        placeholder='Search'
        onChange={(e) => onQueryChange(e.target.value)}
        value={query}
      />
    </form>
  );
}

export default Search;
