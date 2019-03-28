import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImagePoster.scss';

const ImagePoster = ({
  src,
  alt,
}) => (
  <img src={src} alt={alt} className={styles.movieElementPoster} />
);

ImagePoster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImagePoster;
