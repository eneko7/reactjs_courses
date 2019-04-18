import React from 'react';
import propTypes from 'prop-types';
import styles from './ResultLine.scss';
import SortBy from './SortBy';

const ResultLine = ({
  quantity,
  searchBy,
  searchRequest,
  location: { pathname },
}) => (
  <div className={styles.result_line}>
    <span
      className={styles.result_line__count_founded_films}
    >
      {`${quantity} movies found ${searchRequest ? `by ${searchBy}: ${searchRequest}` : ''}`}
    </span>
    {pathname.substring(0, 7) !== '/movie/' && <SortBy /> }
  </div>
);

ResultLine.defaultProps = {
  quantity: 1,
  searchRequest: '',
};

ResultLine.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string,
  }).isRequired,
  quantity: propTypes.number,
  searchBy: propTypes.string.isRequired,
  searchRequest: propTypes.string,
};

export default ResultLine;
