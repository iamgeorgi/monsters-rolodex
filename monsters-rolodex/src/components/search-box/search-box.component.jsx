import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placehoder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placehoder}
    onChange={handleChange}
  />
)