import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SiteTitle from '../../common/siteTitle';
import Button from '../../common/buttons';
import MovieDescription from './movieDescription/';
import { extendedReverseColors } from '../../common/buttons/buttons.css';
import { movieHeader } from '../headers.css';
import { topRow, container, movieDescription, img } from './MovieHeader.css';

const MovieHeader = ({ movie }) => (
  <header className={movieHeader}>
    <section className={topRow}>
      <SiteTitle />
      <Link to="/">
        <Button
          name="SEARCH"
          buttonStyling={extendedReverseColors}
        />
      </Link>
    </section>
    <section className={container}>
      <img
        src={movie.imgSrc}
        className={img}
        alt="Movie logo"
      />
      <section className={movieDescription}>
        <MovieDescription movie={movie} />
      </section>
    </section>
  </header>
);

MovieHeader.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string,
    director: PropTypes.string,
    language: PropTypes.string,
    rating: PropTypes.number,
    releaseDate: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  movie: state.fetchMovies.find(movie => movie.id === props.match.params.id),
});

export default connect(mapStateToProps)(MovieHeader);
