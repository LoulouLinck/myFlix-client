import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);


 useEffect(() => {
   if (!token) return;

   fetch("..../movies", {
     headers: { Authorization: `Bearer ${token}` },
   })
     .then((response) => response.json())
     .then((movies) => {
       setMovies(movies);

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
      <div>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </div>
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
    <button onClick={() => { setUser(null); setToken(null); localStorage.clear();
        }}>Logout</button>
      </div>
  );
};

export default MainView;