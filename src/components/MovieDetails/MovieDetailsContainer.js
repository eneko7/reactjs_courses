import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MovieDetails from './MovieDetails';
import { fetchMovie } from '../../modules/movie/movieActions';
import { fetchSearchMovies } from '../../modules/movies/moviesActions';
import { getMovieState, getIsFetchingMovie, getIsFetchedMovie } from '../../modules/movie/movieSelectors';

const mapStateToProps = state => ({
  movie: getMovieState(state),
  isFetchingMovie: getIsFetchingMovie(state),
  isFetchedMovie: getIsFetchedMovie(state),
});

const mapDispatchToProps = {
  fetchMovie,
  fetchSearchMovies,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));
