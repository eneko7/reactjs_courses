import { connect } from 'react-redux';
import MoviesGrid from './MoviesGrid';
import { fetchSearchMovies, fetchNextMovies } from '../../modules/movies/moviesActions';
import { getMovies, getIsFetchingMovies, getIsFetchedMovies } from '../../modules/movies/moviesSelectors';
import { getSearchBy, getSearchRequest, getSortBy } from '../../modules/filter/filterSelectors';

const mapStateToProps = state => ({
  movies: getMovies(state),
  isFetchingMovies: getIsFetchingMovies(state),
  isFetchedMovies: getIsFetchedMovies(state),
  searchBy: getSearchBy(state),
  sortBy: getSortBy(state),
  searchRequest: getSearchRequest(state),
});

const mapDispatchToProps = {
  fetchSearchMovies,
  fetchNextMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesGrid);
