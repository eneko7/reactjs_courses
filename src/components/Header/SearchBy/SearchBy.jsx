import React from 'react';
import SortInput from '../../SortInput';
import styles from './SearchBy.scss';

const SearchBy = () => (
  <div className={styles.search_by_wrapper}>
    <span className={styles.search_by_title}>SEARCH BY</span>
    <SortInput
      name="searchBy"
      id="title"
      text="title"
      inputClass="search_type_input"
      labelClass="search_type_button"
      defaultChecked
    />
    <SortInput
      name="searchBy"
      id="genres"
      text="genre"
      inputClass="search_type_input"
      labelClass="search_type_button"
    />
  </div>
);

export default SearchBy;
