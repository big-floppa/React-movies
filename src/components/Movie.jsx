import React from 'react';
import noPicture from '../assets/no-picture.png';

const Movie = ({ title, poster_path }) => {
  return (
    <div className="card blue lighten-3">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          width="500"
          className="movie-poster"
          alt={`${title}: Обложка фильма.`}
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noPicture}
        />
      </div>
      <div className="card-content white-text">
        <span className="card-title">{title}</span>
      </div>
    </div>
  );
};

export default Movie;
