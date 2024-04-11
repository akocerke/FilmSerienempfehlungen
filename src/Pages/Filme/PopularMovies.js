import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../src/apiService";
import Content from "../../components/Content/Content";
const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    fetchMoviesData();
  }, []);

  return (
    <Content>
      <div>
        <h1>Populäre Filme</h1>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>Popularidad: {movie.popularity}%</p>
            <p>{movie.overview}</p>
          </div>
        ))}{" "}
      </div>
    </Content>
  );
};

export default PopularMovies;
