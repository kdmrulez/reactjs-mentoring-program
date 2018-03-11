import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toogleSortByAction } from '../../actions';
import { subNav, side, element, selected, list } from './subNav.css';
import { RELEASE_DATE, RATING } from '../../constants';

const SubNav = ({
  withoutSortSection, withSortSection, sortBy, toogleSortBy,
  moviesNumber, searchCriteria,
}) => (
  <div>
    { withoutSortSection &&
      <nav className={subNav}>
        <aside className={side}> { searchCriteria } </aside>
      </nav>
    }
    { withSortSection &&
      <nav className={subNav}>
        <aside className={side}> { moviesNumber } </aside>
        <aside className={side}>
          <span className={element}>Sort by</span>
          <ul className={list}>
            <li>
              <button
                className={sortBy === RELEASE_DATE ? selected : element}
                onClick={() => toogleSortBy(RELEASE_DATE)}
              >
            relase date
              </button>
            </li>
            <li>
              <button
                className={sortBy === RATING ? selected : element}
                onClick={() => toogleSortBy(RATING)}
              >
            rating
              </button>
            </li>
          </ul>
        </aside>
      </nav>
}
  </div>
);

SubNav.propTypes = {
  sortBy: PropTypes.string.isRequired,
  toogleSortBy: PropTypes.func.isRequired,
  moviesNumber: PropTypes.number.isRequired,
  searchCriteria: PropTypes.string.isRequired,
  withoutSortSection: PropTypes.bool,
  withSortSection: PropTypes.bool,
};

SubNav.defaultProps = {
  withoutSortSection: false,
  withSortSection: false,
};

const mapStateToProps = state => ({
  sortBy: state.sortBy,
  moviesNumber: state.fetchMovies.length,
  searchCriteria: state.searchBarInput,
});

const mapDispatchToProps = dispatch => ({
  toogleSortBy: type => dispatch(toogleSortByAction(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubNav);
