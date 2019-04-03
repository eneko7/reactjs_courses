import React from 'react';
import Logo from '../Logo';
import Search from './Search';
import SearchBy from './SearchBy';
import Button from '../Button';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <div className={styles.header__find_your_movie}>
      <span className={styles.header__find_your_movie_span}>FIND YOUR MOVIE</span>
    </div>
    <Search />
    <div className={styles.header__search_controls}>
      <SearchBy />
      <Button text="SEARCH" />
    </div>
  </header>
);

export default Header;
