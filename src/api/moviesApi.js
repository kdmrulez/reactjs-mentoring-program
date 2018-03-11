import { URL } from '../constants';

const getMoviesByDirector = director => fetch(`${URL}${director}`);

export default getMoviesByDirector;
