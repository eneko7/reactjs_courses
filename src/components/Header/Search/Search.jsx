/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import styles from './Search.scss';

class Search extends Component {
  searchInput = React.createRef();

  componentDidMount() {
    const {
      location: { search },
      updateSearchRequest,
      fetchSearchMovies,
      fetchFilms,
      searchBy,
      sortBy,
    } = this.props;
    const parsed = queryString.parse(search);
    const { q } = parsed;
    // updateSearchRequest(q || '');
    // // this.props.dispatch(fetchFilms());
    // fetchSearchMovies(q || '', searchBy, sortBy);
  }

  saveSearchRequest = () => {
    const { updateSearchRequest } = this.props;
    updateSearchRequest(this.searchInput.current.value);
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
      history.push(`/search?q=${this.searchInput.current.value}`);
    } else {
      history.push('');
    }
  };

  render() {
    const { searchRequest, searchBy } = this.props;
    return (
      <form onSubmit={this.searchHandler}>
        <input
          type="text"
          className={styles.search_input}
          ref={this.searchInput}
          name="search"
          placeholder={searchBy === 'title' ? 'Enter movie title' : 'Enter genres name, for example: action, family, adventure'}
          value={searchRequest}
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
  fetchFilms: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default Search;
