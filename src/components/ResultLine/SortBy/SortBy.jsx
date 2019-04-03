import React from 'react';
import SortInput from '../../SortInput';
import styles from './SortBy.scss';

const SortBy = () => (
  <div className={styles.sort_by}>
    <span className={styles.sort_by__span}>Sort by</span>
    <SortInput
      name="sortBy"
      id="release_date"
      text="Release date"
      inputClass="sort_by_input"
      labelClass="sort_by_button"
      defaultChecked
    />
    <SortInput
      name="sortBy"
      id="vote_average"
      text="Rating"
      inputClass="sort_by_input"
      labelClass="sort_by_button"
    />
  </div>
);

export default SortBy;
