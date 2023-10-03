import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";


export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://cineflix-sqlk.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }, [token]);

  //       const moviesFromApi = data.map((movie) => {
  //         return {
  //           _id: movie.id, //or movie.key?
  //           ImagePath: movie.ImagePath,
  //           Title: movie.Title,
  //           ReleaseYear: movie.ReleaseYear,
  //           Description: movie.Description,
  //           Genre: {
  //             Name: movie.Genre.Name,
  //             Description: movie.Genre.Description
  //           },
  //           Director: {
  //             Name: movie.Director.Name,
  //             Bio: movie.Director.Bio,
  //             Birth: movie.Director.Birth,
  //             Death: movie.Director.Death
  //           },
  //           Featured: movie.Featured
  //         };
  //       });

  //       setMovies(moviesFromApi);
  //     });
  // }, []);

  if (!user) {
    return (
    <LoginView 
     onLoggedIn={(user, token) => {
      setUser(user);
      setToken(token);
     }} 
    />
   );
  }

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  //if theres no movies in the array the page will say the list is empty
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      <div>
        {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        );
      })}
    </div>
    <button onClick={() => { setUser(null); setToken(null);
        }}>Logout</button>
      </div>
  );
};

export default MainView;