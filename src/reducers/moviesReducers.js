import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERRORS } from '../actions';

export const fetchMovies = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.movies;
    default:
      return state;
  }
};

export const fetchMoviesErrors = (state = null, action) => {
  switch (action.type) {
    case FETCH_MOVIES_ERRORS:
      return action.error;
    default:
      return state;
  }
};
