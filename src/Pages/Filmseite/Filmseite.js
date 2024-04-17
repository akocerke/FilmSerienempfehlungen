import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../../src/apiService";
import styles from "./Filmseite.module.css";

const Filmseite = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };
    fetchMovieData();
  }, [id]);

  if (!movie) {
    return <div className={styles.container}>Am Laden...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.moviedetails}>
        <h2 className={styles.title}>{movie.title}</h2>
        <img className={styles.poster} src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
        <p className={styles.overview}>{movie.overview}</p>
        <p className={styles.releasedate}>Release Date: {movie.release_date}</p>
        <p className={styles.rating}>Rating: {movie.vote_average}</p>
        {/* Hier mehr infos hinzufügen */}
        <a className={styles.backlink} href="/filme">Zurück zu den Filmen</a>
      </div>
    </div>
  );
};

export default Filmseite;
