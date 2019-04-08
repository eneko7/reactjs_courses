import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ text, onClick }) => (
  <button type="button" className={styles.header_button} onClick={onClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
