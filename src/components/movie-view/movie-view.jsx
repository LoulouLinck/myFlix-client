import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.ImagePath} className="moviePoster" />
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
        <span>{movie.Featured}</span>
      </div>

      <button onClick={onBackClick} className="back-button">Go back</button>
    </div>
  );
};

// Here is where we define all the props constraints for the MovieView
MovieView.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string,
    Description: PropTypes.string,
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birth: PropTypes.string,
      Death: PropTypes.string
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string
    }),
    Featured: PropTypes.bool
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieView;