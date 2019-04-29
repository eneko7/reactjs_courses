import { connect } from 'react-redux';
import MoviesPage from './MoviesPage';
import { fetchSearchMovies } from '../../modules/movies/moviesActions';
import { getSearchBy, getSearchRequest, getSortBy } from '../../modules/filter/filterSelectors';

const mapStateToProps = state => ({
  searchBy: getSearchBy(state),
  sortBy: getSortBy(state),
  searchRequest: getSearchRequest(state),
});

const mapDispatchToProps = {
  fetchSearchMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
