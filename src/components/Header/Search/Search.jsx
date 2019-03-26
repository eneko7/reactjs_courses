import React, { Fragment } from 'react';
import styles from './Search.scss';

const Search = () => (
  <Fragment>
    <input type="text" className={styles.search_input} name="search" placeholder="Film name" />
    <span className={styles.search_icon}>&#8617;</span>
  </Fragment>
);

export default Search;
