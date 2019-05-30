import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MovieElement from './MovieElement';
import { fetchMovie } from '../../../modules/movie/movieActions';
import { fetchSearchMovies } from '../../../modules/movies/moviesActions';
import { getMovieState, getIsFetchingMovie, getIsFetchedMovie } from '../../../modules/movie/movieSelectors';

const mapStateToProps = (state) => {
  const movie = getMovieState(state);
  return {
    genres: movie.genres,
    movie,
    isFetchingMovie: getIsFetchingMovie(state),
    isFetchedMovie: getIsFetchedMovie(state),
  };
};

const mapDispatchToProps = {
  fetchMovie,
  fetchSearchMovies,

};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieElement));
