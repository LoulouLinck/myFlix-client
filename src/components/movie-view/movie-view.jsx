import "../movie-view/movie-view.jsx";
// Here you import the PropTypes library
import PropTypes from "prop-types";

const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.Imagepath} className="moviePoster" />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Release year: </span>
        <span>{movie.ReleaseYear}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Bio: </span>
        <span>{movie.Director.Bio}</span>
      </div>
      <div>
        <span>Birth: </span>
        <span>{movie.Director.Birth}</span>
      </div>
      <div>
        <span>Death: </span>
        <span>{movie.Director.Death}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Genre.Description}</span>
      </div>
      <div>
        <span>Featured: </span>
        <span>{movie.featured}</span>
      </div>

      <button onClick={onBackClick}>Go back</button>
    </div>
  );
};

// Here is where we define all the props constraints for the MovieView
MovieView.propTypes = {
  movie: PropTypes.shape({
    imagepath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      birth: PropTypes.string.isRequired,
      death: PropTypes.string.isRequired
    }),
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    featured: PropTypes.bool.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieView;