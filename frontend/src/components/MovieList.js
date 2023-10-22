// MovieList.js

import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => onMovieClick(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;