import { combineReducers } from 'redux';
import { searchBy, searchBarInput } from './searchReducers';
import { fetchMovies, fetchMoviesErrors } from './moviesReducers';
import sortBy from './sortReducers';

export default combineReducers({
  searchBy,
  searchBarInput,
  fetchMovies,
  fetchMoviesErrors,
  sortBy,
});
