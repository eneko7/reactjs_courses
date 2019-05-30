import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Genres.scss';

const Genres = ({ data, classGenres }) => {
  if (data.length > 0) {
    const genres = data.map(item => (
      <span
        className={classnames(styles.genre, styles[classGenres])}
        key={item.toString()}
      >
        {item}
      </span>
    ));
    return (
      <div className={classnames(styles.genres, styles[classGenres])}>
        { genres }
      </div>
    );
  }
  return null;
};

Genres.defaultProps = {
  data: [],
  classGenres: '',
};

Genres.propTypes = {
  data: propTypes.arrayOf(propTypes.string),
  classGenres: propTypes.string,
};

export default Genres;
