import React, { Component } from 'react';
import propTypes from 'prop-types';
import ImagePoster from '../ImagePoster';
import Genres from '../../Genres';
import styles from './MovieElement.scss';

class MovieElement extends Component {
  state = {
    isOpenMovie: false,
  };

  openMovie = (id) => {
    const {
      history,
      fetchMovie,
      movie,
      fetchSearchMovies,
    } = this.props;
    fetchMovie(id);
    history.push(`/movie/${id}`);
    this.setState(prevState => ({
      isOpenMovie: !prevState.isOpenMovie,
    }));
    window.scrollTo(0, 0);
    const { genres } = movie;
    if (genres) {
      fetchSearchMovies(genres.join(', '), 'genres', 'release_date');
    }
  };

  render() {
    const { data } = this.props;
    if (data === null) {
      return null;
    }
    return (
      <div className={styles.movie_element} onClick={this.openMovie.bind(null, data.id)} role="presentation">
        <ImagePoster src={data.poster_path} alt={data.title} />
        <div className={styles.wrapper_title_year}>
          <span className={styles.title}>{data.title}</span>
          <span className={styles.year}>
            {new Date(data.release_date).getFullYear()}
          </span>
        </div>
        <Genres data={data.genres} />
      </div>
    );
  }
}

MovieElement.defaultProps = {
  data: null,
  fetchMovie: () => null,
};

MovieElement.propTypes = {
  history: propTypes.objectOf(propTypes.any).isRequired,
  fetchMovie: propTypes.func,
  fetchSearchMovies: propTypes.func.isRequired,
  movie: propTypes.objectOf(propTypes.any).isRequired,
  data: propTypes.objectOf(
    propTypes.oneOfType([
      propTypes.string,
      propTypes.number,
      propTypes.array,
      propTypes.bool,
    ]),
  ),
};

export default MovieElement;
