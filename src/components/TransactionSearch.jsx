import React, { useState } from 'react';

function TransactionSearch({ onSearch }){
  const [searchWord, setSearchWord] = useState('');

  function handleChange(e){
    setSearchWord(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input id='search' type="text" value={searchWord} onChange={handleChange} placeholder="Search transactions..." />
  );
}

export default TransactionSearch;