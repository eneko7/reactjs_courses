import React from 'react';
import SortInput from '../../SortInput/SortInput';
import styles from './SortBy.scss';

const SortBy = () => (
  <div className={styles.sortBy}>
    <span className={styles.sortBy_span}>Sort by</span>
    <SortInput
      name="sortBy"
      id="releaseDate"
      text="Release date"
      inputClass="sortBy_input"
      labelClass="sortBy_button"
      defaultChecked="defaultChecked"
    />
    <SortInput
      name="sortBy"
      id="Rating"
      text="Rating"
      inputClass="sortBy_input"
      labelClass="sortBy_button"
    />
  </div>
);

export default SortBy;
