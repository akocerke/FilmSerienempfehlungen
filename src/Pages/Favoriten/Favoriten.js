import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFavoritesByUserId } from "../../apiUser";
import { fetchMovieDetails, fetchSeriesDetails } from "../../apiService";
import Content from "../../components/Content/Content";
import styles from "./Favoriten.module.css";

const Favoriten = () => {
  const { userId } = useParams(); // Extrahieren der userId aus der URL
  const [favorites, setFavorites] = useState({ movies: [], series: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const { movieIds, seriesIds } = await getFavoritesByUserId(userId);
        // Filme und Serien Details parallel abrufen
        const moviesPromise = Promise.all(movieIds.map(id => fetchMovieDetails(id)));
        const seriesPromise = Promise.all(seriesIds.map(id => fetchSeriesDetails(id)));

        // Warten auf alle Promises, um zu vervollständigen
        const [movies, series] = await Promise.all([moviesPromise, seriesPromise]);

        setFavorites({ movies, series });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  if (loading) return <div className={styles.container}>Am Laden...</div>;
  if (error) return <div className={styles.container}>Fehler: {error.message}</div>;

  return (
    <Content>
      <div className={styles.container}>
        <h1 className={styles.ueberschrift}>Favoriten</h1>
        <div className={styles.movies}>
          <h2>Filme</h2>
          {favorites.movies.map(movie => (
            <div key={movie.id} className={styles.movie}>
              <h3>{movie.title}</h3>
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} />
            </div>
          ))}
        </div>
        <div className={styles.series}>
          <h2>Serien</h2>
          {favorites.series.map(series => (
            <div key={series.id} className={styles.series}>
              <h3>{series.name}</h3>  {/* Beachte, dass der Titel für Serien oft unter 'name' statt 'title' geführt wird */}
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${series.poster_path}`} alt={series.name} />
            </div>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default Favoriten;
