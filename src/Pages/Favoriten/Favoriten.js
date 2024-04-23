import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFavoritesByUserId, deleteFavoritesByUserId } from "../../apiUser";
import { fetchMovieDetails, fetchSeriesDetails } from "../../apiService";
import Content from "../../components/Content/Content";
import styles from "./Favoriten.module.css";
import { jwtDecode } from 'jwt-decode';

const Favoriten = () => {
  const [favorites, setFavorites] = useState({ movies: [], series: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId: urlUserId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setError({ message: "Kein Token gefunden. Bitte melden Sie sich an." });
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const tokenUserId = decoded.id;

      if (!tokenUserId) {
        setError(new Error("Token enthält keine Benutzer-ID."));
        setLoading(false);
        return;
      }

      if (tokenUserId.toString() !== urlUserId) {
        setError(new Error("Zugriff verweigert: Sie können nur Ihre eigenen Favoriten anzeigen."));
        setLoading(false);
        return;
      }

      const fetchFavorites = async () => {
        try {
          const { movieIds, seriesIds } = await getFavoritesByUserId(tokenUserId);
          const moviesPromise = movieIds.map(id => fetchMovieDetails(id));
          const seriesPromise = seriesIds.map(id => fetchSeriesDetails(id));
          const [movies, series] = await Promise.all([
            Promise.all(moviesPromise),
            Promise.all(seriesPromise),
          ]);
          setFavorites({ movies, series });
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchFavorites();
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [urlUserId]);

  const handleDelete = async (type, id) => {
    try {
      const movieId = type === "Film" ? id : null;
      const seriesId = type === "Serie" ? id : null;

      await deleteFavoritesByUserId(urlUserId, movieId, seriesId);

      setFavorites(prevFavorites => ({
        movies: type === "Film" ? prevFavorites.movies.filter(movie => movie.id !== id) : prevFavorites.movies,
        series: type === "Serie" ? prevFavorites.series.filter(series => series.id !== id) : prevFavorites.series
      }));
      
      console.log(`${type} mit der ID ${id} wurde erfolgreich gelöscht.`);
    } catch (error) {
      console.error(`Fehler beim Löschen des Favoriten:`, error);
      setError({ message: `Fehler beim Löschen des ${type}: ${error.message}` });
    }
  };

  if (loading) return <div className={styles.loader}><div className={styles.loaderWheel}></div><div className={styles.loaderText}></div></div>;
  if (error) return <div className={styles.errorHandling}><h3>Error:</h3> <p>{error.message}</p></div>;

  return (
    <Content>
      <div className={styles.container2}>
        <h1 className={styles.ueberschrift}>Favoriten</h1>
        <hr className={styles.introH1} />
        <div className={styles.container1}>
          <h2 className={styles.filmeH2}>Filme</h2>
          <div className={styles.gridContainer}>
            {favorites.movies.map((movie) => (
              <div key={movie.id} className={styles.gridItem}>
                <div className={styles.gridItemContent}>
                  <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} />
                  <h3>{movie.title}</h3>
                  <button className={styles.buttonF} onClick={() => handleDelete("Film", movie.id)}>Löschen</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.container1}>
          <h2 className={styles.serieH2}>Serien</h2>
          <div className={styles.gridContainer}>
            {favorites.series.map((series) => (
              <div key={series.id} className={styles.gridItem}>
                <div className={styles.gridItemContent}>
                  <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${series.poster_path}`} alt={series.name} />
                  <h3>{series.name}</h3>
                  <button className={styles.buttonF} onClick={() => handleDelete("Serie", series.id)}>Löschen</button>
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
