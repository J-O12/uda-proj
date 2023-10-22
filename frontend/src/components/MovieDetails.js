// MovieDetails.js

import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div>No movie selected</div>;
  }

  const { title, releaseYear, genre, director } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <p>Release Year: {releaseYear}</p>
      <p>Genre: {genre}</p>
      <p>Director: {director}</p>
    </div>
  );
};

export default MovieDetails;