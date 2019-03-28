import React, { Component } from 'react';
import propTypes from 'prop-types';
import ImagePoster from '../ImagePoster/ImagePoster';
import Genres from '../../Genres/Genres';
import styles from './MovieElement.scss';

class MovieElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMovie: false,
    };
    this.openMovieRef = React.createRef();
  }

  componentDidMount() {
    this.openMovieRef.current.addEventListener('click', this.openMovie);
  }

  componentWillUnmount() {
    this.openMovieRef.current.removeEventListener('click', this.openMovie);
  }

  openMovie = () => {
    this.setState(prevState => ({
      isOpenMovie: !prevState.isOpenMovie,
    }));
  };

  render() {
    const { data } = this.props;
    if (!data) {
      return null;
    }
    return (
      <div className={styles.movieElement} ref={this.openMovieRef}>
        <ImagePoster src={data.poster_path} alt={data.title} />
        <div className={styles.wrapperTitleYear}>
          <span className={styles.title}>{data.title.toUpperCase()}</span>
          <span className={styles.year}>
            {new Date(data.release_date).getFullYear()}
          </span>
        </div>
        <Genres data={data.genres} />
      </div>
    );
  }
}

MovieElement.defaultProps = {
  data: {},
};

MovieElement.propTypes = {
  data: propTypes.objectOf(
    propTypes.oneOfType([
      propTypes.string,
      propTypes.number,
      propTypes.array,
      propTypes.bool,
    ]),
  ),
};

export default MovieElement;
