import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBar } from './searchBar.css';
import { handleSearchBarChangeAction } from '../../../../../actions';

const SearchBar = ({ handleSearchBarChange, searchBarInput }) => (
  <input
    type="text"
    name="search"
    className={searchBar}
    onChange={(event) => {
      handleSearchBarChange(event.target.value);
    }}
    placeholder="&#8617;"
    value={searchBarInput}
  />
);

SearchBar.propTypes = {
  handleSearchBarChange: PropTypes.func.isRequired,
  searchBarInput: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  searchBarInput: state.searchBarInput,
});

const mapDispatchToProps = dispatch => ({
  handleSearchBarChange: input => dispatch(handleSearchBarChangeAction(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
