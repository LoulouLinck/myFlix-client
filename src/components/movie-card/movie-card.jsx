// Here you import the PropTypes library
import PropTypes from "prop-types";

const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};

// Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    // Imagepath: PropTypes.string.isRequired,
    // ReleaseYear: PropTypes.string.isRequired,
    // Description: PropTypes.string.isRequired,
    // Director: PropTypes.shape({
    //   Name: PropTypes.string.isRequired,
    //   Bio: PropTypes.string.isRequired,
    //   Birth: PropTypes.string.isRequired,
    //   Death: PropTypes.string.isRequired
    // }),
    // Genre: PropTypes.shape({
    //   Name: PropTypes.string.isRequired,
    //   Description: PropTypes.string.isRequired
    // }),
    // Featured: PropTypes.bool.isRequired,
    Title: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieCard;