import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="movie_title" className="label-form">Título</label>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="input-title"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle" className="label-form">Subtítulo</label>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          className="input-subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image" className="label-form">Imagem</label>
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="movie_storyline" className="label-form">Sinopse</label>
        <textarea
          id="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div>
        <label htmlFor="movie_genre" className="label-form">Gênero</label>
        <select
          id="movie_genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div>
        <label htmlFor="movie_rating" className="label-form">Avaliação</label>
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="submit-button">
        <button
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="add-movie-form">
        <form className="form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

export default MovieForm;

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
