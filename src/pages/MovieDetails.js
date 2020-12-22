import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoading: true,
    };
    this.removeMovie = this.removeMovie.bind(this);
  }
  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movieData = await movieAPI.getMovie(id);
    this.setState({ movie: movieData, isLoading: false });
  }

  async removeMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (this.state.isLoading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details" className="movie-details">
        <p className="movie-card-title">{`Title: ${title}`}</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <div className="movie-information">
          <p className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div className="link-group">
          <Link to={`/movies/${id}/edit`} className="edit-link">EDITAR</Link>
          <Link to={'/'} className="back-link">VOLTAR</Link>
          <Link to={'/'} onClick={this.removeMovie} className="delete-link">DELETAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;
