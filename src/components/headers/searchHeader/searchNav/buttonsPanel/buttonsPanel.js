// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../../../common/buttons';
import { buttonsPanel, categoriesButtons,
  title, searchButton } from './ButtonsPanel.css';
import { extended, selected, defaultStyle } from '../../../../common/buttons/buttons.css';
import { toogleSearchByAction,
  fetchMoviesByDirectorAction } from '../../../../../actions';
import { TITLE, DIRECTOR } from '../../../../../constants';

const ButtonsPanel = ({
  fetchMoviesByDirector, searchBarInput,
  searchBy, changeSearchByFor,
}) => (
  <nav className={buttonsPanel}>
    <aside className={categoriesButtons}>
      <span className={title}>SEARCH BY </span>
      <Button
        name="TITLE"
        buttonStyling={searchBy === TITLE ? selected : defaultStyle}
        action={() => changeSearchByFor(TITLE)}
      />
      <Button
        name="DIRECTOR"
        buttonStyling={searchBy === DIRECTOR ? selected : defaultStyle}
        action={() => changeSearchByFor(DIRECTOR)}
      />
    </aside>
    <aside className={searchButton}>
      <Link to="/search">
        <Button
          name="SEARCH"
          buttonStyling={extended}
          action={() => {
          fetchMoviesByDirector(searchBarInput);
        }}
        />
      </Link>
    </aside>
  </nav>
);

ButtonsPanel.propTypes = {
  searchBy: PropTypes.string.isRequired,
  searchBarInput: PropTypes.string.isRequired,
  changeSearchByFor: PropTypes.func.isRequired,
  fetchMoviesByDirector: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchBy: state.searchBy,
  searchBarInput: state.searchBarInput,
});

const mapDispatchToProps = dispatch => ({
  changeSearchByFor: type => dispatch(toogleSearchByAction(type)),
  fetchMoviesByDirector: director => dispatch(fetchMoviesByDirectorAction(director)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsPanel);
