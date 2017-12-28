import React from 'react';
import PropTypes from 'prop-types';
import { detailsStyle, detailsRowStyle,
  titleStyle, relaseDateBoxStyle } from './movieItems.css';

const MovieItemDetails = ({ title, language, releaseDate }) => (
  <div className={detailsStyle}>
    <section className={detailsRowStyle}>
      <span className={titleStyle}>{title}</span>
      <span className={relaseDateBoxStyle}>{releaseDate}</span>
    </section>
    <section className={detailsRowStyle}>{language}</section>
  </div>
);

MovieItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default MovieItemDetails;
