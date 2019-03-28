import React from 'react';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import SearchBy from './SearchBy/SearchBy';
import Button from '../Button/Button';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <div className={styles.findYourMovie}>
      <span className={styles.findYourMovie_span}>FIND YOUR MOVIE</span>
    </div>
    <Search />
    <div className={styles.header_searchControls}>
      <SearchBy />
      <Button text="SEARCH" />
    </div>
  </header>
);

export default Header;
