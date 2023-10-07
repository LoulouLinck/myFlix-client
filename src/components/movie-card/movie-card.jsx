import React from "react";
import { useState } from "react";
// Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    user.FavouriteMovies.includes(movie.id)
  );

  const addFavouriteMovie = () => {
    fetch(
      `https://cineflix-sqlk.onrender.com/users/${user.Username}/movies/${movie.id}`,
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
      `https://cineflix-sqlk.onrender.com/users/${user.Username}/movies/${movie.id}`,
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
    <div>
      <Card className="h-100">
        <Card.Title>{movie.Title}</Card.Title>
        {/* <Card.Img  className='w-100' variant="top" src={movie.ImagePath} /> */}
        <Card.Body>
          <Card.Text>
            {movie.Director.Name}, {movie.Genre.Name}, {movie.ReleaseYear}
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Link to={`/movies/${movie.id}`}>
            <Button className="info-button" variant="light">
              More Info
            </Button>
          </Link>
          {isFavourite ? (
            <Button variant="danger" onClick={removeFavouriteMovie}>
              Remove from favourite
            </Button>
          ) : (
            <Button variant="primary" onClick={addFavouriteMovie}>
              Add to favourite
            </Button>
          )}
        </Card.Footer>
      </Card>
    </div>
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
