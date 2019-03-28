import React from 'react';
import SortInput from '../../SortInput';
import styles from './SearchBy.scss';

const SearchBy = () => (
  <div className={styles.searchBy_wrapper}>
    <span className={styles.searchBy_title}>SEARCH BY</span>
    <SortInput
      name="searchBy"
      id="TITLE"
      text="TITLE"
      inputClass="searchType_input"
      labelClass="searchType_button"
      defaultChecked="defaultChecked"
    />
    <SortInput
      name="searchBy"
      id="GENRE"
      text="GENRE"
      inputClass="searchType_input"
      labelClass="searchType_button"
    />
  </div>
);

export default SearchBy;
