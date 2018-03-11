import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { container, noMoviesStyle } from './movieItems.css';
import { RATING } from '../../constants';

const sortMovies = (sortBy) => {
  switch (sortBy) {
    case RATING:
      return (firstMovie, secondMovie) =>
        secondMovie.rating - firstMovie.rating;
    default:
      return (firstMovie, secondMovie) =>
        secondMovie.releaseDate - firstMovie.releaseDate;
  }
};

const MovieItems = ({ movies, moviesErrors, sortBy }) => (
  <main className={container}>

    {moviesErrors && <div className={noMoviesStyle}>Errors</div>}

    { (!moviesErrors && movies.length === 0) &&
      <div className={noMoviesStyle}>No films found</div>}


    { (!moviesErrors && movies.lenght !== 0) &&
      movies.sort(sortMovies(sortBy)).map(movie =>
      (<MovieItem
        key={movie.id}
        movie={movie}
      />))}
  </main>
);

MovieItems.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  moviesErrors: PropTypes.instanceOf(Error),
  sortBy: PropTypes.string.isRequired,
};

MovieItems.defaultProps = {
  moviesErrors: null,
};
const mapStateToProps = state => ({
  movies: state.fetchMovies,
  moviesErrors: state.fetchMoviesErrors,
  sortBy: state.sortBy,
});

export default connect(mapStateToProps)(MovieItems);
