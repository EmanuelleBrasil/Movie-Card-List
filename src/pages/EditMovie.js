import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      isLoading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movieData = await movieAPI.getMovie(id);
    this.setState({ movie: movieData, isLoading: false });
  }

  async handleSubmit(updatedMovie) {
    const editMovie = await movieAPI.updateMovie(updatedMovie);
    if (editMovie === 'OK') this.setState({ shouldRedirect: true });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (isLoading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
