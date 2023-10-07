import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  return (
    <div>
      <Row className="h-100  movie-view">
        {/* <Col md={6} sm={12} className="movie-image">
        <img src={movie.ImagePath} className="w-100" />
      </Col> */}

        <Col md={6} sm={12} className="movie-info">
          <div>
            <h1>Title: </h1>
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
          <Link to={`/`}>
            <Button className="back-button">Go back</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

// Here is where we define all the props constraints for the MovieView
MovieView.propTypes = {
  movie: PropTypes.shape({
    // ImagePath: PropTypes.string.isRequired,
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
  }).isRequired
};

export default MovieView;