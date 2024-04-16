import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../src/apiServiceTV";
import Content from "../../components/Content/Content";
import styles from "./SerienCarrusel.module.css";

const CarruselTV = () => {
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
      <div className={styles.ontop}>
        <h1 className={styles.ueberschrift}>Top 5 Serien</h1>
        <div>
          <hr className={styles.introH1}></hr>
        </div>
      </div>
      <div className={styles.carrusel}>
        <div className={styles.carruselContainer}>
          {movies.map((movie) => (
            <div className={styles.gridItemContent} key={movie.id}>
              <div className={styles.gridItem}>
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt={movie.name}
                />
              </div>
              <div className={styles.beschreibung}>
                <div className={styles.titleContainer}>
                  <h5 className={styles.title}>{movie.name}</h5>
                </div>
                <div className={styles.releasedateContainer}>
                  {/* Veröffentlichungsdatum im deutschen Format anzeigen */}
                  <p className={styles.releasedate}>
                    {formatDateGerman(movie.first_air_date)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default CarruselTV;
