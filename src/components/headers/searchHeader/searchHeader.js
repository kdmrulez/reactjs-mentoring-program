// @flow

import React from 'react';
import { header } from '../headers.css';
import SiteTitle from '../../common/siteTitle';
import SearchNav from './searchNav';

const SearchHeader = () => (
  <header className={header}>
    <SiteTitle />
    <SearchNav />
  </header>
);


export default SearchHeader;
