// Filmseite.js

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../../../src/apiService";
import styles from "./Filmseite.module.css";
import Content from "../../components/Content/Content";
import ActorCarousel from "./ActorCarousel";

const formatDateGerman = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('de-DE', options);
};

const formatPercentage = (rating) => {
  return `${Math.round(rating * 10)}%`;
};




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
    <Content>
      <div className={styles.container}>
        <div className={styles.moviedetails}>
          <h2 className={styles.title}>{movie.title}</h2>
          <img className={styles.poster} src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
          <h2 className={styles.tagline}>{movie.tagline}</h2>
          <h3 className={styles.status}>{movie.status}</h3>
          <p className={styles.overview}>{movie.overview}</p>
              <ActorCarousel movieId={id} />
          <div className={styles.info}>
            <p className={styles.releasedate}>Release Date: {formatDateGerman(movie.release_date)}</p>
            <p className={styles.rating}>
                Rating: <span className={`${styles.circle} ${movie.vote_average >= 5 ? styles.green : styles.red}`}>{formatPercentage(movie.vote_average)}</span>
            </p>


            <p className={styles.budget}>Budget: {movie.budget} $</p>
            <p className={styles.studio}>Studio: {movie.production_companies && movie.production_companies.map(production_companies => production_companies.name).join(', ')}</p>
            <p className={styles.genres}>Genres: {movie.genres && movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
          <Link to="/filme" className={styles.backlink}>Zurück zu Filme</Link>
        </div>
      </div>
    </Content>
  );
};

export default Filmseite;
