import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './Header';
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
