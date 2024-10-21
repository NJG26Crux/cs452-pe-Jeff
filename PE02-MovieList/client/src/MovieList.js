import React, { useState } from 'react';

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const movies = [
    { title: 'Deadpool & Wolverine', genre: 'Action', releaseYear: 2024 },
    { title: 'Wolfs', genre: 'Thriller', releaseYear: 2024 },
    { title: 'Alien Romulus', genre: 'Horror', releaseYear: 2024 },
    { title: 'The Wild Robot', genre: 'Family', releaseYear: 2024 },
    { title: 'The Substance', genre: 'Horror', releaseYear: 2024 },
  ];

  const uniqueGenres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === 'All Genres' ? movies : movies.filter(movie => movie.genre === selectedGenre);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <select value={selectedGenre} onChange={handleGenreChange}>
        {uniqueGenres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieClick(movie.title)}>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
