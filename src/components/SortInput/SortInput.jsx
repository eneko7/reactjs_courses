/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment, Component } from 'react';
import propTypes from 'prop-types';
import styles from './SortInput.scss';

class SortInput extends Component {
  changeValue = (el) => {
    const { value, name } = el.target;
    const { updateFilterSearch, updateFilterSort, updateSearchRequest } = this.props;
    if (name === 'searchBy') {
      updateFilterSearch(value);
      updateSearchRequest('');
    } else {
      const { searchBy, searchRequest } = this.props;
      updateFilterSort(searchRequest, searchBy, value);
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
    } = this.props;
    return (
      <Fragment>
        <input type="radio" name={name} id={id} value={id} className={styles[inputClass]} defaultChecked={defaultChecked} onChange={this.changeValue} />
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
};

export default SortInput;
