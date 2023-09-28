import "../movie-view/movie-view.jsx";

const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <img src={movie.imagepath} className="moviePoster" />
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Release year: </span>
        <span>{movie.releaseYear}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director.name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre.name}</span>
      </div>
      
      <button onClick={onBackClick}>Go back</button>
    </div>
  );
};

export default MovieView;