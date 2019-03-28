import React, { Component } from 'react';
import propTypes from 'prop-types';
import ImagePoster from '../ImagePoster';
import Genres from '../../Genres';
import styles from './MovieElement.scss';

class MovieElement extends Component {
  state = {
    isOpenMovie: false,
  };

  openMovie = () => {
    this.setState(prevState => ({
      isOpenMovie: !prevState.isOpenMovie,
    }));
  };

  render() {
    const { data } = this.props;
    if (data === null) {
      return null;
    }
    return (
      <div className={styles.movieElement} onClick={this.openMovie} role="presentation">
        <ImagePoster src={data.poster_path} alt={data.title} />
        <div className={styles.wrapperTitleYear}>
          <span className={styles.title}>{data.title}</span>
          <span className={styles.year}>
            {new Date(data.release_date).getFullYear()}
          </span>
        </div>
        <Genres data={data.genres} />
      </div>
    );
  }
}

MovieElement.propTypes = {
  data: propTypes.objectOf(
    propTypes.oneOfType([
      propTypes.string,
      propTypes.number,
      propTypes.array,
      propTypes.bool,
    ]),
  ).isRequired,
};

export default MovieElement;
