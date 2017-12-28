import React from 'react';
import SearchBar from './searchBar';
import ButtonsPanel from './buttonsPanel';
import { searchNav, title } from './searchNav.css';

const SearchNav = () => (
  <div className={searchNav}>
    <div className={title}>FIND YOUR MOVIE</div>
    <SearchBar />
    <ButtonsPanel />
  </div>
);

export default SearchNav;
