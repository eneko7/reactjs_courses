import React from 'react';
import Logo from '../Logo';
import Search from './Search';
import SearchBy from './SearchBy';
import Button from '../Button';
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
