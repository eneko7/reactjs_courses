import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ text }) => (
  <button type="button" className={styles.header_button}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
