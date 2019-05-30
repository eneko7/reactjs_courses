/* eslint-disable no-lonely-if */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment, Component } from 'react';
import queryString from 'query-string';
import propTypes from 'prop-types';
import styles from './SortInput.scss';

class SortInput extends Component {
  changeValue = (el) => {
    const { history, location } = this.props;
    const parsed = queryString.parse(location.search);
    const { query, searchBy, sortBy } = parsed;
    const { value, name } = el.target;
    const { updateFilterSearch, updateFilterSort, updateSearchRequest } = this.props;
    if (name === 'searchBy') {
      if (query) {
        history.push(`/search?query=${query}&searchBy=${value}&sortBy=${sortBy}`);
        updateFilterSearch(value);
        updateSearchRequest('');
      } else {
        updateFilterSearch(value);
        updateSearchRequest('');
      }
    } else {
      if (query) {
        history.push(`/search?query=${query}&searchBy=${searchBy}&sortBy=${value}`);
        updateFilterSort(query, searchBy, value);
      } else {
        updateFilterSort(this.props.searchRequest, this.props.searchBy, value);
      }
    }
  };

  render() {
    const {
      name,
      text,
      id,
      inputClass,
      labelClass,
      defaultChecked,
      location,
    } = this.props;
    const parsed = queryString.parse(location.search);
    const { query, searchBy, sortBy } = parsed;
    return (
      <Fragment>
        { query
          ? (
            <input
              type="radio"
              name={name}
              id={id}
              value={id}
              className={styles[inputClass]}
              checked={searchBy === id || sortBy === id ? 'checked' : ''}
              onChange={this.changeValue}
            />
          )
          : (
            <input
              type="radio"
              name={name}
              id={id}
              value={id}
              className={styles[inputClass]}
              defaultChecked={defaultChecked}
              onChange={this.changeValue}
            />
          )
        }
        <label htmlFor={id} className={styles[labelClass]}>{text}</label>
      </Fragment>
    );
  }
}

SortInput.defaultProps = {
  defaultChecked: false,
  searchRequest: '',
};

SortInput.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  inputClass: propTypes.string.isRequired,
  labelClass: propTypes.string.isRequired,
  searchBy: propTypes.string.isRequired,
  searchRequest: propTypes.string,
  defaultChecked: propTypes.bool,
  updateFilterSearch: propTypes.func.isRequired,
  updateFilterSort: propTypes.func.isRequired,
  updateSearchRequest: propTypes.func.isRequired,
  location: propTypes.shape({
    search: propTypes.string,
  }).isRequired,
  history: propTypes.objectOf(propTypes.any).isRequired,
};

export default SortInput;
