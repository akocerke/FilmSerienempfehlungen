import React, { useEffect, useState } from "react";
import { getFavoritesByUserId } from "../../apiUser";
import { fetchMovieDetails, fetchSeriesDetails } from "../../apiService";
import Content from "../../components/Content/Content";
import styles from "./Favoriten.module.css";
import { deleteFavoritesByUserId } from "../../apiUser";
import { jwtDecode } from 'jwt-decode';

const Favoriten = () => {
  const [favorites, setFavorites] = useState({ movies: [], series: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);  // Zustandsvariable für userId

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError({ message: "Kein Token gefunden. Benutzer anmelden." });
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const userIdFromToken = decoded.id;  // Nutze 'id' aus dem Token
      if (!userIdFromToken) {
        throw new Error("Token enthält keine Benutzer-ID.");
      }
      setUserId(userIdFromToken);  // Setzen der userId im Zustand
    } catch (error) {
      setError(error);
      setLoading(false);
      return;
    }

    if (userId) {  // useEffect dependency auf userId setzen
      const fetchFavorites = async () => {
        try {
          const { movieIds, seriesIds } = await getFavoritesByUserId(userId);
          const moviesPromise = Promise.all(
            movieIds.map(id => fetchMovieDetails(id))
          );
          const seriesPromise = Promise.all(
            seriesIds.map(id => fetchSeriesDetails(id))
          );
          const [movies, series] = await Promise.all([
            moviesPromise,
            seriesPromise,
          ]);
          setFavorites({ movies, series });
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchFavorites();
    }
  }, [userId]);  // useEffect beobachtet Änderungen an userId

  const handleDelete = async (type, id) => {
    if (!userId) return;  // Sicherstellen, dass userId verfügbar ist

    try {
      console.log(`Lösche ${type} mit der ID ${id}`);
      await deleteFavoritesByUserId(userId, type === 'Film' ? id : undefined, type === 'Serie' ? id : undefined);
      setFavorites(prevFavorites => ({
        movies: type === 'Film' ? prevFavorites.movies.filter(movie => movie.id !== id) : prevFavorites.movies,
        series: type === 'Serie' ? prevFavorites.series.filter(series => series.id !== id) : prevFavorites.series,
      }));
    } catch (error) {
      console.error(`Fehler beim Löschen des ${type}:`, error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className={styles.errorHandling}><h3>Error:</h3> <p>{error.message}</p></div>;

  return (
    <Content>
      <div className={styles.container2}>
        <h1 className={styles.ueberschrift}>Favoriten</h1>
        <hr className={styles.introH1} />
        <div className={styles.container1}>
          <h2 className={styles.filmeH2}>Filme</h2>
          <div className={styles.gridContainer}>
            <div className={styles.movies}>
              {favorites.movies.map((movie) => (
                <div key={movie.id} className={styles.gridItem}>
                  <div className={styles.gridItemContent}>
                    <img
                      src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                    <button
                      className={styles.buttonF}
                      onClick={() => handleDelete("Film", movie.id)}
                    >
                      Löschen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h2 className={styles.serieH2}>Serien</h2>
          <div className={styles.gridContainer}>
            <div className={styles.series}>
              {favorites.series.map((series) => (
                <div key={series.id} className={styles.gridItem}>
                  <div className={styles.gridItemContent}>
                    <img
                      src={`https://image.tmdb.org/t/p/w220_and_h330_face${series.poster_path}`}
                      alt={series.name}
                    />
                    <h3>{series.name}</h3>
                    <button
                      className={styles.buttonF}
                      onClick={() => handleDelete("Serie", series.id)}
                    >
                      Löschen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Favoriten;
