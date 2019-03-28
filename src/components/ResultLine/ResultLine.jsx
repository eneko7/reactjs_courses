import React from 'react';
import styles from './ResultLine.scss';
import SortBy from './SortBy/SortBy';

const ResultLine = () => (
  <div className={styles.resultLine}>
    <span className={styles.countFoundFilms}>7 movies found</span>
    <SortBy />
  </div>
);

export default ResultLine;
