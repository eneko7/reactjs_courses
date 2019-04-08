import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.scss';

class Search extends Component {
  searchInput = React.createRef();

  saveSearchRequest = () => {
    const { updateSearchRequest } = this.props;
    updateSearchRequest(this.searchInput.current.value);
  };

  searchHandler = (evenet) => {
    evenet.preventDefault();
    const { fetchSearchMovies, sortBy, searchBy } = this.props;
    fetchSearchMovies(this.searchInput.current.value, searchBy, sortBy);
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
};

export default Search;
