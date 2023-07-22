// src/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by Description"
      />
    </div>
  );
};

export default SearchBar;
