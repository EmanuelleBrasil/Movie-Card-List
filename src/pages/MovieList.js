import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const moviesData = await movieAPI.getMovies();
    this.setState({ movies: moviesData, isLoading: false });
  }

  render() {
    const { movies } = this.state;

    if (this.state.isLoading) return <Loading />;

    return (
      <div className="movie-list-page">
        <header className="movie-card-header">
          <h1 className="page-title"> My Movie Card List </h1>
        </header>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <Link to="/movies/new" className="add-card-link">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
