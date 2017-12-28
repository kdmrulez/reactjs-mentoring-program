import React from 'react';
import PropTypes from 'prop-types';
import { container, titleStyle, sectionBasicStyle, ratingStyle,
  relaseDateStyle, descriptionStyle } from './MovieDescription.css';

const MovieDescription = ({ movie }) => (
  <article className={container}>
    <div className={titleStyle}>{movie.title}</div>
    <section className={sectionBasicStyle}>
      <span>{movie.language}</span>
      <span className={ratingStyle}>{movie.rating}</span>
    </section>
    <section className={sectionBasicStyle}>
      <span className={relaseDateStyle}>{movie.releaseDate}</span>
    </section>
    <section className={descriptionStyle}>{movie.description}</section>
    <section className={sectionBasicStyle}>Director: {movie.director}</section>
  </article>
);

MovieDescription.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string,
    director: PropTypes.string,
    language: PropTypes.string,
    rating: PropTypes.number,
    releaseDate: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieDescription;
