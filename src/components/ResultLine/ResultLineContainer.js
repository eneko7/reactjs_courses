import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ResultLine from './ResultLine';
import { fetchDefaultMovies } from '../../modules/movies/moviesActions';
import { getMoviesState, getQuantityMoviesState } from '../../modules/movies/moviesSelectors';
import { getSearchBy, getSearchRequest } from '../../modules/filter/filterSelectors';

const mapStateToProps = state => ({
  movies: getMoviesState(state),
  quantity: getQuantityMoviesState(state),
  searchBy: getSearchBy(state),
  searchRequest: getSearchRequest(state),
});

const mapDispatchToProps = {
  fetchDefaultMovies,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultLine));
