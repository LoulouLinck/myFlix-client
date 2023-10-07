import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
// import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? storedUser : null);
  // OR const [user, setUser] = useState(null);

  //creates state changes for selected movies
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

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
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie.id, //or movie.key?
            ImagePath: movie.ImagePath,
            Title: movie.Title,
            ReleaseYear: movie.ReleaseYear,
            Description: movie.Description,
            Genre: {
              Name: movie.Genre.Name,
              Description: movie.Genre.Description
            },
            Director: {
              Name: movie.Director.Name,
              Bio: movie.Director.Bio,
              Birth: movie.Director.Birth,
              Death: movie.Director.Death
            },
            Featured: movie.Featured
          };
        });
        setMovies(moviesFromApi);
      });
  }, [token]);
  //returns login view: users have to login to use app

  return (
    <Row className="justify-content-md-center"> 
      {!user ? (
           <Col md={5}>
          <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
          }}
        />
          or
          <SignupView />
          </Col>
      ) : selectedMovie ? (

        <Col md={8}>
        <MovieView 
          movie={selectedMovie} 
          onBackClick={() => setSelectedMovie(null)} 
        />
        </Col>
    <BrowserRouter>
      <Row className="justify-content-md-center cards-container">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user); // setUser(null)?
                        setToken(token); //setToken(null)?
                        // localStorage.clear()?
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId" //or :Title?
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />

                          movie={movie}
                          token={token}
                        />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={5}>
                    <ProfileView
                      user={user}
                      token={token}
                      setUser={setUser}
                      movies={movies}
                    />
                  </Col>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};

//   if (!user) {
//     return (
//       <div>
//         <LoginView onLoggedIn={(user, token) => {
//           setUser(user);
//           setToken(token);
//         }} />
//         or
//         <SignupView />
//       </div>
//     );
//   }
//    //statement for selected movie: show movie view details, includes code for back button click to go to movies list
//   if (selectedMovie) {
//     return (
//       <MovieView
//         movie={selectedMovie}
//         onBackClick={() => setSelectedMovie(null)}
//       />
//     );
//   }
//   //if no movies in the array: page says 'list is empty'
//   if (movies.length === 0) {
//     return <div>The list is empty!</div>;
//   }
//    //return statement for movies in array being displayed and clickable from MovieCard file
//   return (
//    <div>
//       {movies.map((movie) => (
//           <MovieCard
//             key={movie.id} //or movie.Title?
//             movie={movie}
//             onMovieClick={(newSelectedMovie) => {
//               setSelectedMovie(newSelectedMovie);
//             }}
//           />
//       ))}
//        <button 
//           onClick={() => { 
//             setUser(null); 
//             setToken(null); 
//             localStorage.clear();
//         }}
//       >
//         Logout
//       </button>
//   </div>
//   );
// };
export default MainView;