import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Search from './Search';
import SearchBy from './SearchBy';
import Button from '../Button';
import styles from './Header.scss';

class Header extends Component {
  searchHeandler = () => {
    const {
      searchRequest, sortBy, searchBy, fetchSearchMovies,
    } = this.props;
    fetchSearchMovies(searchRequest, searchBy, sortBy);
  };

  render() {
    return (
      <header className={styles.header}>
        <Logo />
        <div className={styles.header__find_your_movie}>
          <span className={styles.header__find_your_movie_span}>FIND YOUR MOVIE</span>
        </div>
        <Search />
        <div className={styles.header__search_controls}>
          <SearchBy />
          <Button text="search" onClick={this.searchHeandler} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  searchRequest: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  fetchSearchMovies: PropTypes.func.isRequired,
};

export default Header;
