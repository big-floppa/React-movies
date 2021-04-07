import React from 'react';
import Movie from './Movie';

const Movies = ({ movies = [] }) => {
  return (
    <div>
      <div className="movies">
        {movies.length ? (
          movies.map((movie) => <Movie key={movie.id} {...movie} />)
        ) : (
          <h4>Фильмы не найдены</h4>
        )}
      </div>
    </div>
  );
};

export default Movies;
