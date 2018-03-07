import { ROOT_IMG_URL } from '../constants';

const mapResponseToMovies = (responseJSON) => {
  const { results } = responseJSON;
  const movies = results.reduce((moviesArray, result) => {
    const director = result.name;
    let directorMovies = result.known_for;

    directorMovies = directorMovies.filter(movie => movie.media_type === 'movie')
      .map(movie => ({
        ...movie,
        director,
      }));
    return [...moviesArray, ...directorMovies];
  }, []);
  return movies.map(movie => ({
    // id constructed this way, because API dont return unique values
    id: `${movie.id}${movie.director}${movie.title}`.replace(/\s+/, ''),
    title: movie.title,
    director: movie.director,
    rating: movie.vote_average,
    description: movie.overview,
    imgSrc: `${ROOT_IMG_URL}${movie.poster_path}`,
    language: movie.original_language,
    releaseDate: movie.release_date.split('-')[0],
  }));
};

export default mapResponseToMovies;
