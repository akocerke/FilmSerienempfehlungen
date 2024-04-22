import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFavoritesByUserId } from "../../apiUser";
import { fetchMovieDetails, fetchSeriesDetails } from "../../apiService";
import Content from "../../components/Content/Content";
import styles from "./Favoriten.module.css";

const Favoriten = () => {
  const { userId } = useParams();
  const [favorites, setFavorites] = useState({ movies: [], series: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const { movieIds, seriesIds } = await getFavoritesByUserId(userId);
        const moviesPromise = Promise.all(
          movieIds.map((id) => fetchMovieDetails(id))
        );
        const seriesPromise = Promise.all(
          seriesIds.map((id) => fetchSeriesDetails(id))
        );
        const [movies, series] = await Promise.all([
          moviesPromise,
          seriesPromise,
        ]);
        setFavorites({ movies, series });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  const handleDelete = async (type, id) => {
    console.log(`Lösche ${type} mit der ID ${id}`);
  };

  if (loading) return <div className={styles.container}>Am Laden...</div>;
  if (error)
    return <div className={styles.container}>Fehler: {error.message}</div>;

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
                    <div className={styles.u3}>
                      <h3>{movie.title}</h3>
                    </div>
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
          <div className={styles.container1}>
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
                      <div className={styles.u3}>
                        <h3>{series.name}</h3>
                      </div>
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
      </div>
    </Content>
  );
};

export default Favoriten;
