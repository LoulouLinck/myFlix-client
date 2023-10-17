import React from "react";
import { useState } from "react";
// Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

// The MovieCard function component

// const MovieCard = ({ movie, onMovieClick }) => {
//   return (
//     <div
//       onClick={() => {
//         onMovieClick(movie);
//       }}
//     >
//       {movie.Title}
//     </div>
//   );
// };

export const MovieCard = ({ movie, user, token, setUser }) => {
  const [isFavourite, setIsFavourite] = useState(
    user.FavouriteMovies.includes(movie._id)
  );

  const addFavouriteMovie = () => {
    fetch(
      `https://cineflix-sqlk.onrender.com/users/${user.Username}/movies/${movie._id}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert("successfully added to favourites");
          localStorage.setItem("user", JSON.stringify(user)); // updating user on local storage
          setUser(user); // updating the react application
          setIsFavourite(true);
          // updatedUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };
  const removeFavouriteMovie = () => {
    fetch(
      `https://cineflix-sqlk.onrender.com/users/${user.Username}/movies/${movie._id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert("successfully deleted from favorites");
          localStorage.setItem("user", JSON.stringify(user)); // updating user on local storage
          setUser(user); // updating the react application
          setIsFavourite(false);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
  
      <Card className="border-0 h-100 justify-content-center card">
        <Card.Title className='card-title' >{movie.Title}</Card.Title>
        <Card.Img  className='w-100' variant="top" src={movie.ImagePath} />
        <Card.Body className='card-body'>
          <Card.Text>
            {movie.Director.Name}, {movie.Genre.Name}, {movie.ReleaseYear}
          </Card.Text>
        </Card.Body>

        <Card.Footer className='card-footer'>
          <Link to={`/movies/${movie._id}`}>
            <Button className="info-button" variant="light">
              More Info
            </Button>
          </Link>
          {isFavourite ? (
            <Button  className="btn-fav-movie"
            variant="link" onClick={removeFavouriteMovie}>
               <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="red"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
            </Button>
          ) : (
            <Button   className="btn-fav-movie"
            variant="link" onClick={addFavouriteMovie}>
               <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="red"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
            </Button>
          )}
        </Card.Footer>
      </Card>

  );
};

// Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    // ImagePath: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    // Description: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
      // Bio: PropTypes.string.isRequired,
      // Birth: PropTypes.string.isRequired,
      // Death: PropTypes.string.isRequired
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
      //   Description: PropTypes.string.isRequired
    }),
    // Featured: PropTypes.bool.isRequired,
    Title: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
