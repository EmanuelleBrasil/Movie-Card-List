import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;

    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-body">
          <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
          <h2 className="movie-card-title">{title}</h2>
          <h3 className="movie-card-storyline">{storyline}</h3>
        </div>
        <Link to={`/movies/${id}`} className="show-details-link">VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};
