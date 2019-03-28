import React from 'react';
import propTypes from 'prop-types';
import styles from './Genres.scss';

const Genres = ({ data }) => {
  if (data.length > 0) {
    const genres = data.map(item => (
      <span className={styles.genre} key={item.toString()}>{item}</span>
    ));
    return (
      <div className={styles.genres}>
        { genres }
      </div>
    );
  }
  return null;
};

Genres.defaultProps = {
  data: [],
};

Genres.propTypes = {
  data: propTypes.arrayOf(propTypes.string),
};

export default Genres;
