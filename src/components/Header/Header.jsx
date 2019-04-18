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
      searchRequest, sortBy, searchBy, fetchSearchMovies, history,
    } = this.props;
    fetchSearchMovies(searchRequest, searchBy, sortBy);
    if (searchRequest !== '') {
      history.push(`/search?q=${searchRequest}`);
    } else {
      history.push('');
    }
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
          <Button classButton="header_button" text="search" onClick={this.searchHeandler} />
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  searchRequest: '',
};

Header.propTypes = {
  searchRequest: PropTypes.string,
  sortBy: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  fetchSearchMovies: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Header;
