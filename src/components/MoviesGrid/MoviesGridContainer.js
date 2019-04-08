import { connect } from 'react-redux';
import MoviesGrid from './MoviesGrid';
import { fetchDefaultMovies, fetchNextMovies } from '../../modules/movies/moviesActions';
import { getMovies, getIsFetchingMovies, getIsFetchedMovies } from '../../modules/movies/moviesSelectors';

const mapStateToProps = state => ({
  movies: getMovies(state),
  isFetchingMovies: getIsFetchingMovies(state),
  isFetchedMovies: getIsFetchedMovies(state),
});

const mapDispatchToProps = {
  fetchDefaultMovies,
  fetchNextMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesGrid);