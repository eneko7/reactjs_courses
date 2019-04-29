import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import MovieElement from './MovieElement';
import Loading from '../Loading';
import styles from './MoviesGrid.scss';

class MoviesGrid extends Component {
  componentDidMount() {
    global.document.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    global.document.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler = () => {
    const { fetchNextMovies, isFetchingMovies } = this.props;
    if ((global.window.innerHeight + global.window.pageYOffset)
    >= global.document.body.scrollHeight && !isFetchingMovies) {
      fetchNextMovies();
    }
  }

  render() {
    const { movies, isFetchingMovies } = this.props;
    if (!movies.length) {
      return (
        <article className={styles.movies_grid}>
          <span className={styles.movies_grid__not_found}>No films found</span>
        </article>
      );
    }
    const data = movies.map(item => <MovieElement key={item.id} data={item} />);
    return (
      <Fragment>
        <article className={styles.movies_grid}>
          {data}
        </article>
        {isFetchingMovies && <Loading />}
      </Fragment>
    );
  }
}

MoviesGrid.propTypes = {
  fetchNextMovies: propTypes.func.isRequired,
  // fetchSearchMovies: propTypes.func.isRequired,
  isFetchingMovies: propTypes.bool.isRequired,
  movies: propTypes.arrayOf(propTypes.object).isRequired,
  // searchBy: propTypes.string.isRequired,
  // searchRequest: propTypes.string.isRequired,
  // sortBy: propTypes.string.isRequired,
};

export default MoviesGrid;
