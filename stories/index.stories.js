import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fetchDefaultMovies, fetchSearchMovies } from '../src/modules/movies/moviesActions';
import { fetchMovie } from '../src/modules/movie/movieActions';
import Root from '../src/components/Root';
import Header from '../src/components/Header';
import createStore from '../src/store';
import MoviesGrid from '../src/components/MoviesGrid';
import ResultLine from '../src/components/ResultLine';
import Footer from '../src/components/Footer';

const store = createStore();
const context = { };
const renderRoot = () => {
  store.dispatch(fetchDefaultMovies());
  return (
    <Provider store={store}>
      <StaticRouter context={context} location="/">
        <Root />
      </StaticRouter>
    </Provider>
  );
};

const renderRootSearch = () => {
  store.dispatch(fetchSearchMovies('Music', 'genres', 'release_date'));
  return (
    <Provider store={store}>
      <StaticRouter context={context} location="/search?query=Music&searchBy=genres&sortBy=release_date">
        <Root />
      </StaticRouter>
    </Provider>
  );
};

const renderRootMovie = () => {
  store.dispatch(fetchMovie(424785));
  store.dispatch(fetchSearchMovies('Action,%20Adventure,%20Comedy,%20Science%20Fiction', 'genres', 'release_date'));
  return (
    <Provider store={store}>
      <StaticRouter context={context} location="/movie/424785?searchBy=Action,%20Adventure,%20Comedy,%20Science%20Fiction">
        <Root />
      </StaticRouter>
    </Provider>
  );
};

storiesOf('Root', module)
  .add('Root component route /', () => renderRoot())
  .add('Root component route /search', () => renderRootSearch())
  .add('Root component route /movie', () => renderRootMovie());

const renderHeader = () => (
  <Provider store={store}>
    <StaticRouter context={context} location="/">
      <Header />
    </StaticRouter>
  </Provider>
);

const renderResultLine = () => {
  store.dispatch(fetchDefaultMovies());
  return (
    <Provider store={store}>
      <StaticRouter context={context} location="/">
        <ResultLine />
      </StaticRouter>
    </Provider>
  );
};

const renderMoviesGrid = () => {
  store.dispatch(fetchDefaultMovies());
  return (
    <Provider store={store}>
      <StaticRouter context={context} location="/">
        <MoviesGrid />
      </StaticRouter>
    </Provider>
  );
};

const renderFooter = () => {
  store.dispatch(fetchDefaultMovies());
  return (
    <Provider store={store}>
      <StaticRouter context={context} location="/">
        <Footer />
      </StaticRouter>
    </Provider>
  );
};

storiesOf('App', module)
  .add('Header component route /', () => renderHeader())
  .add('ResultLine component route /', () => renderResultLine())
  .add('MoviesGrid component route /', () => renderMoviesGrid())
  .add('Footer component route /', () => renderFooter());
