import { connect } from 'react-redux';
import Button from './Button';
import { getSearchBy, getSortBy, getSearchRequest } from '../../modules/filter/filterSelectors';
import { fetchSearchMovies } from '../../modules/movies/moviesActions';

const mapStateToProps = state => ({
  searchRequest: getSearchRequest(state),
  sortBy: getSortBy(state),
  searchBy: getSearchBy(state),
});

const mapDispatchToProps = {
  fetchSearchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
