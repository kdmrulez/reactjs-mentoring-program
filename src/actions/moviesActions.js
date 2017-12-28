import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERRORS } from './actionsTypes';
import getMoviesByDirector from '../api';
import mapResponseToMovies from './actionsUtils';

const fetchMoviesSuccesAction = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
});

const fetchMoviesErrorsAction = error => ({
  type: FETCH_MOVIES_ERRORS,
  error,
});

const fetchMoviesByDirectorAction = director => async (dispatch) => {
  try {
    const response = await getMoviesByDirector(director);
    const movies = mapResponseToMovies(await response.json());
    dispatch(fetchMoviesSuccesAction(movies));
    dispatch(fetchMoviesErrorsAction(null));
  } catch (error) {
    dispatch(fetchMoviesErrorsAction(error));
  }
};

export default fetchMoviesByDirectorAction;
