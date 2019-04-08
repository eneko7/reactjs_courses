import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImagePoster.scss';

const ImagePoster = ({
  src,
  alt,
}) => (
  <img src={src} alt={alt} className={styles.movie_element_poster} />
);

ImagePoster.defaultProps = {
  src: '',
  alt: '',
};

ImagePoster.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImagePoster;
