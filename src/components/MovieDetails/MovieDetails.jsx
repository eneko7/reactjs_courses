import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Logo from '../Logo';
import Button from '../Button';
import ImagePoster from '../MoviesGrid/ImagePoster';
import styles from './MovieDetails.scss';
import Loader from '../Loading';
import Genres from '../Genres';

class MovieDetails extends PureComponent {
  componentDidMount() {
    this.getMovie();
  }

  componentWillUnmount() {
    const { fetchMovie } = this.props;
    return fetchMovie(0);
  }

  getMovie = () => {
    const { location: { pathname }, fetchMovie } = this.props;
    return fetchMovie(pathname.substr(7));
  };

  returnMain = () => {
    const { history } = this.props;
    history.push('');
  };

  render() {
    const { movie, fetchSearchMovies } = this.props;
    if (!movie) return <Loader />;
    const { genres } = movie;
    if (genres) {
      fetchSearchMovies(genres.join(', '), 'genres', 'release_date');
    }
    return (
      <div className={styles.movie_details}>
        <div className={styles.top_line}>
          <Logo />
          <Button classButton="details_button" text="search" onClick={this.returnMain} />
        </div>
        <div className={styles.main}>
          <ImagePoster src={movie.poster_path} classPoster="poster" />
          <div className={styles.wrapper_right}>
            <span className={styles.movie_titile}>{movie.title}</span>
            <Genres data={movie.genres} classGenres="genresClass" />
            <div className={styles.wrapper_year_and_time}>
              <span className={styles.year}>
                {new Date(movie.release_date).getFullYear()}
              </span>
              <span className={styles.time}>{movie.runtime ? ` ${movie.runtime}  min` : ''}</span>
            </div>
            <div className={styles.movie_description}>{movie.overview}</div>
          </div>
        </div>
      </div>
    );
  }
}
MovieDetails.defaultProps = {
  movie: null,
};

MovieDetails.propTypes = {
  history: propTypes.objectOf(propTypes.any).isRequired,
  location: propTypes.shape({
    params: propTypes.object,
    pathname: propTypes.string,
    search: propTypes.string,
  }).isRequired,
  movie: propTypes.objectOf(propTypes.any),
  fetchMovie: propTypes.func.isRequired,
  fetchSearchMovies: propTypes.func.isRequired,
};

export default MovieDetails;
