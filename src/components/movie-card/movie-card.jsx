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
    // ReleaseYear: PropTypes.string,
    // Description: PropTypes.string,
    // Director: PropTypes.shape({
    //   Name: PropTypes.string,
    //   Bio: PropTypes.string,
    //   Birth: PropTypes.string,
    //   Death: PropTypes.string
    // }),
    // Genre: PropTypes.shape({
    //   Name: PropTypes.string,
    //   Description: PropTypes.string
    // }),
    // Featured: PropTypes.bool,
    Title: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieCard;