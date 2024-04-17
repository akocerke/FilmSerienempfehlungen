import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../../src/apiService";
import Content from "../../components/Content/Content";
import styles from "./Filme.module.css";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    fetchMoviesData();
  }, []);

  // Funktion zur Konvertierung des Datums in das deutsche Format
  const formatDateGerman = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('de-DE', options);
  };

  return (
    <Content>
      <div>
        <h1 className={styles.ueberschrift}>Populäre Filme</h1>
        <div>
          <hr className={styles.introH1}></hr>
        </div>
      </div>

      <div className={styles.gridContainer}>
        {movies.map((movie) => (
          <Link to={`/filmseite/${movie.id}`} key={movie.id}>
            <div className={styles.gridItemContent}>
              <div className={styles.gridItem}>
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt={movie.name}
                />
              </div>
              <div className={styles.beschreibung}>
                <div className={styles.titleContainer}>
                  <h5 className={styles.title}>{movie.title}</h5>
                </div>
                <div className={styles.releasedateContainer}>
                  {/* Veröffentlichungsdatum im deutschen Format anzeigen */}
                  <p className={styles.releasedate}>{formatDateGerman(movie.release_date)}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Content>
  );
};

export default PopularMovies;
