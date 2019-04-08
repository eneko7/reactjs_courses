import { connect } from 'react-redux';
import ResultLine from './ResultLine';
import { fetchDefaultMovies } from '../../modules/movies/moviesActions';
import { getMovies, getQuantityMovies } from '../../modules/movies/moviesSelectors';

const mapStateToProps = state => ({
  movies: getMovies(state),
  quantity: getQuantityMovies(state),
});

const mapDispatchToProps = {
  fetchDefaultMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(ResultLine);
