import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../apiService";
import { getFavoritesByUserId } from "../../apiUser";
import Content from "../../components/Content/Content";
import styles from "./Favoriten.module.css";

const Favoriten = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const [favoriten, setFavoriten] = useState([]);
  const [loadedMovies, setLoadedMovies] = useState([]);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const favoritenData = await getFavoritesByUserId(userId);
        setFavoriten(favoritenData.movieIds.filter(id => id));
      } catch (error) {
        console.error("Fehler beim Abrufen der Favoriten:", error);
      }
    };

    if (userId) {
      fetchUserFavorites();
    }
  }, [userId]);

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const movies = [];
        for (const movieId of favoriten) {
          const movieDetails = await fetchMovieDetails(movieId);
          movies.push(movieDetails);
        }
        setLoadedMovies(movies);
      } catch (error) {
        console.error("Fehler beim Abrufen der Filmdetails:", error);
      }
    };

    if (favoriten.length > 0) {
      fetchMoviesDetails();
    }
  }, [favoriten]);

  return (
    <Content>
      <div>
        <h2>Deine Favoriten</h2>
        <div>
          <hr className={styles.introH1}></hr>
        </div>
      </div>

      <div className={styles.gridContainer}>
        {loadedMovies.map((movie) => (
          <div className={styles.gridItemContent} key={movie.id}>
            <div className={styles.gridItem}>
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className={styles.beschreibung}>
              <div className={styles.titleContainer}>
                <h5 className={styles.title}>{movie.title}</h5>
              </div>
              <div className={styles.releasedateContainer}>
                <p className={styles.releasedate}>Veröffentlichungsdatum: {movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Content>
  );
};

export default Favoriten;
