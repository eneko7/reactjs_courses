import React from 'react';
import MovieElement from './MovieElement/MovieElement';
import styles from './MoviesGrid.scss';
import response from '../../constants/constants';

const MoviesGrid = () => {
  const { data } = response;
  const movies = data.map(item => <MovieElement data={item} key={item.id} />);
  return (
    <article className={styles.MoviesGrid}>
      {movies}
    </article>
  );
};

export default MoviesGrid;
