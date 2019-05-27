import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import styles from './Search.scss';

class Search extends Component {
  searchInput = React.createRef();

  saveSearchRequest = () => {
    const { updateSearchRequest, history, location } = this.props;
    const parsed = queryString.parse(location.search);
    updateSearchRequest(this.searchInput.current.value);
    history.push(`/search?query=${this.searchInput.current.value}&searchBy=${parsed.searchBy}&sortBy=${parsed.sortBy}`);
  };

  searchHandler = (evenet) => {
    evenet.preventDefault();
    const {
      fetchSearchMovies,
      sortBy,
      searchBy,
      history,
    } = this.props;
    fetchSearchMovies(this.searchInput.current.value, searchBy, sortBy);
    if (this.searchInput.current.value !== '') {
      history.push(`/search?query=${this.searchInput.current.value}&searchBy=${searchBy}&sortBy=${sortBy}`);
    } else {
      history.push('');
    }
  };

  render() {
    const { searchRequest, searchBy, location } = this.props;
    const parsed = queryString.parse(location.search);
    let placeholder = 'Enter movie title';
    if ((parsed.searchBy && parsed.searchBy === 'genres') || searchBy === 'genres') {
      placeholder = 'Enter genres name, for example: action, family, adventure';
    }
    return (
      <form onSubmit={this.searchHandler}>
        <input
          type="text"
          className={styles.search_input}
          ref={this.searchInput}
          name="search"
          placeholder={placeholder}
          value={parsed.query ? parsed.query : searchRequest}
          onChange={this.saveSearchRequest}
        />
        <span className={styles.search_icon} onClick={this.searchHandler} role="presentation">&#8617;</span>
      </form>
    );
  }
}

Search.defaultProps = {
  sortBy: 'vote_average',
  searchBy: 'title',
  searchRequest: '',
};

Search.propTypes = {
  sortBy: PropTypes.string,
  searchBy: PropTypes.string,
  searchRequest: PropTypes.string,
  fetchSearchMovies: PropTypes.func.isRequired,
  updateSearchRequest: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default Search;
