import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

class Button extends Component {
  searchHeandler = () => {
    const {
      searchRequest, sortBy, searchBy, fetchSearchMovies,
    } = this.props;
    fetchSearchMovies(searchRequest, searchBy, sortBy);
  };

  render() {
    const { text } = this.props;
    return (
      <button type="button" className={styles.header_button} onClick={this.searchHeandler}>{text}</button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  searchRequest: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  fetchSearchMovies: PropTypes.func.isRequired,
};

export default Button;
