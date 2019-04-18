import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MovieElement from './MovieElement';
import { fetchMovie } from '../../../modules/movie/movieActions';
import { fetchSearchMovies } from '../../../modules/movies/moviesActions';
import { getMovie, getIsFetchingMovie, getIsFetchedMovie } from '../../../modules/movie/movieSelectors';

const mapStateToProps = state => ({
  movie: getMovie(state),
  isFetchingMovie: getIsFetchingMovie(state),
  isFetchedMovie: getIsFetchedMovie(state),
});

const mapDispatchToProps = {
  fetchMovie,
  fetchSearchMovies,

};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieElement));
