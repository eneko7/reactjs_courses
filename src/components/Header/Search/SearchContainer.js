import { connect } from 'react-redux';
import Search from './Search';
import { fetchSearchMovies } from '../../../modules/movies/moviesActions';
import { getSearchBy, getSortBy, getSearchRequest } from '../../../modules/filter/filterSelectors';
import { updateSearchRequest } from '../../../modules/filter/filterActions';

const mapStateToProps = state => ({
  sortBy: getSortBy(state),
  searchBy: getSearchBy(state),
  searchRequest: getSearchRequest(state),
});

const mapDispatchToProps = {
  fetchSearchMovies,
  updateSearchRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
