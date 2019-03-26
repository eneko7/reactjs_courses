/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styles from './SortInput.scss';

const SortInput = ({
  name,
  text,
  id,
  inputClass,
  labelClass,
  defaultChecked,
}) => (
  <Fragment>
    <input type="radio" name={name} id={id} className={styles[inputClass]} defaultChecked={defaultChecked} />
    <label htmlFor={id} className={styles[labelClass]}>{text}</label>
  </Fragment>
);

SortInput.defaultProps = {
  defaultChecked: '',
};

SortInput.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  inputClass: propTypes.string.isRequired,
  labelClass: propTypes.string.isRequired,
  defaultChecked: propTypes.string,
};

export default SortInput;
