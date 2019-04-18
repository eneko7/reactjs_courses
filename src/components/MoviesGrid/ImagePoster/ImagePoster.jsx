import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ImagePoster.scss';

const ImagePoster = ({ src, classPoster }) => (
  // <img
  //   src={src}
  //   alt={alt}
  //   className={classnames(styles.movie_element_poster, styles[classPoster])}
  // />
  <div className={classnames(styles.movie_element_poster, styles[classPoster])} style={{ backgroundImage: `linear-gradient(75deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0) 30%), url(${src})` }} />
);

ImagePoster.defaultProps = {
  src: '',
  classPoster: '',
};

ImagePoster.propTypes = {
  src: PropTypes.string,
  classPoster: PropTypes.string,
};

export default ImagePoster;
