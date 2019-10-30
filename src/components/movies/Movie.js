import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const { movie } = props;

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5>{movie.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted fas fa-star-half-alt"> Movie average rate: {movie.vote_average}</h6>
        
          <Link
            to={`movie/${movie.id}`}
            className="btn btn btn-outline-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Movie info
          </Link>
          {/* {console.log(movie)} */}
        </div>
      </div>
    </div>
  );
};

export default Movie;
