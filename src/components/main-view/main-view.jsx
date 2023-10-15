import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

import { Button } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser? storedUser : null);

  //creates state changes for selected movies
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [token, setToken] = useState(storedToken? storedToken : null);

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

      ) : (movies.length === 0) ? (
        <div>The list is empty!</div>
      ) : (
        <div>
          {movies.map((movie) => (
             <Col className='mb-5' key={movie.id} md={3}>
            <MovieCard
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
           </Col>
          ))}

        <Button 
          onClick={() => { 
            setUser(null); 
            setToken(null); 
            localStorage.clear();
        }}
      >
        Logout
      </Button>
  </div>
      )}
    </Row>
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