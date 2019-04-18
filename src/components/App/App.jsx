import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import PageNotFound from '../../pages/PageNotFound';
import styles from './App.scss';

const App = () => (
  <main className={styles.main}>
    <Switch>
      <Route exact path="/" component={MoviesPage} />
      <Route exact path="/search" component={MoviesPage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/movie/:id" component={MovieDetailsPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </main>

);

export default App;
