import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../../src/apiTopRated";
import Content from "../../components/Content/Content";
import styles from "./TopRated.module.css";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData.slice(0, 5));
    };
    fetchMoviesData();
  }, []);

  // Funktion zur Konvertierung des Datums in das deutsche Format
  const formatDateGerman = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  return (
    <Content>
      <div>
        <h1 className={styles.ueberschrift}>Top 5 Bewertete Filme</h1>
        <div>
          <hr className={styles.introH1}></hr>
        </div>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselContainer}>
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/filmseite/${movie.id}`} // Verlinken zur Filmseite
              className={styles.gridItemContent}
            >
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
                  <p className={styles.releasedate}>
                    {formatDateGerman(movie.release_date)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default TopRated;
