import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ text, onClick, classButton }) => (
  <button type="button" className={styles[classButton]} onClick={onClick}>{text}</button>
);

Button.propTypes = {
  classButton: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
