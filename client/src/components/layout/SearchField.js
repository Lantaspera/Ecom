import React from 'react';
import './header.css';


const SearchField = ({ value, onChange }) => {
  return (
    <div className="search-field-container">
      <input
        type="text"
        className="search-field"
        placeholder="Search..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
     
    </div>
  );
};

export default SearchField;