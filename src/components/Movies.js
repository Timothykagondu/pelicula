import React, { useState, useEffect } from 'react';

function Movies() {
  
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDisLikes] = useState([]);
  const [movieId] = useState([]);
  
  useEffect(() => {
    fetch('https://pelicula.onrender.com/genres')
      .then(result => result.json())
      .then(data => setGenres(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('https://pelicula.onrender.com/movies')
      .then(result => result.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`'https://pelicula.onrender.com/movies'${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error(error));
  }, [movieId]);

  const handleLike = () => {
    setLikes (likes + 1);
    fetch(`'https://pelicula.onrender.com/movies'${movieId}/like`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => setLikes(data))
      .catch((error) => console.error(error));
  };

  const handleDislike = () => {
    setDisLikes (likes - 1);
    fetch(`''https://pelicula.onrender.com/movies'${movieId}/dislike`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => setDisLikes(data))
      .catch((error) => console.error(error));
  };
  
  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='genres'>
      <ul className='genres-list'>
        {genres.map(genre => (
          <li className='genre-item' key={genre.id}>{genre.name} 
          </li>
        ))}
      </ul>


    <div className='movies'>
      <ul>
        {movies.map(movies => (
          <li key={movies.id}><a href="./ReviewPage">Review This Movie</a>{movies.title} 
          {movies.description}  {movies.year}  {movies.length} Minutes <img src={movies.image_url}></img>  {movies.rating}</li>
        ))}
      </ul>
    
      <div>

      <h1>{movieData.title}</h1>
      <p>{movieData.description}</p>
      <p>Likes: {movieData.likes}</p>
      <p>Dislikes: {movieData.dislikes}</p>
      <button onClick={handleLike}>Like</button>
      <span> {likes} </span>
      <button onClick={handleDislike}>Dislike</button>
      <span> {dislikes} </span>

    </div>

    </div>
    </div>
  );
}

export default Movies;