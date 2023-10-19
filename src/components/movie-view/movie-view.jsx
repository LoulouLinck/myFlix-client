import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);

  return (
    <div className="movie-view-container" >
      <Row className="movie-view"> 
        <Col md={6} sm={12} className="movie-image">
        <img src={movie.ImagePath} className="movie-image" />
      </Col>

        <Col md={6} sm={12} className="movie-info">
          <div>
            <h1> 
              <span>{movie.Title}</span> 
            </h1>
          </div>
          <div>
            <span>{movie.ReleaseYear}, {movie.Genre.Name} </span>
          </div>
          <div>
            <span>Directed by </span>
            <span>{movie.Director.Name}</span>
          </div>
       </Col>
       <Col>
          <div className="movie-description">
            <br />
            <h5>
              <span>Plot & Facts </span>  
            </h5> 
            <br />
          
              <span >{movie.Description}</span>
            
            
          </div>
          <br />
          <div className="movie-description">
            <h5>
              <span>About the director </span>
            </h5>
            <br />
            <span>{movie.Director.Bio}</span>
          </div>
          <br />
          <div className="movie-description">
            <span>Birth & Death: </span>
            <span>{movie.Director.Birth}-{movie.Director.Death}</span>
          </div>

          {/* <div>
            <span>Description: </span>
            <span>{movie.Genre.Description}</span>
          </div> */}
          {/* <div>
            <span>Featured: </span>
            <span>{movie.Featured}</span>
          </div> */}
          <br />
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
  }).isRequired
};

export default MovieView;