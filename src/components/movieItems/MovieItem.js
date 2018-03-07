import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import MovieItemDetails from './movieItemDetails';
import { item, img, imgContainer } from './movieItems.css';

const MovieItem = ({ movie }) => (
  <article className={item}>
    <Link
      to={`/film/${movie.id}`}
      className={imgContainer}
      onClick={() => {
         Scroll.animateScroll.scrollToTop();
}}
    >
      <img src={movie.imgSrc} alt="Movie Logo" className={img} />
    </Link>
    <MovieItemDetails
      title={movie.title}
      language={movie.language}
      releaseDate={movie.releaseDate}
    />
  </article>
);

MovieItem.propTypes = {
  movie: PropTypes.shape({
    imgSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;
