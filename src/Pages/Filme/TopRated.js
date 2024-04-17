import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../src/apiTopRated";
import Content from "../../components/Content/Content";
import styles from "./TopRated.module.css";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex] = useState(0);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData.slice(0, 5));
    };
    fetchMoviesData();
  }, []);

  // Función para formatear la fecha en formato alemán
  const formatDateGerman = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  // Función para buscar en YouTube el trailer de la película
  const searchOnYouTube = (movieTitle) => {
    const searchQuery = encodeURIComponent(`${movieTitle} trailer`);
    window.open(
      `https://www.youtube.com/results?search_query=${searchQuery}`,
      "_blank"
    );
  };

  return (
    <Content>
      <div>
        <h1 className={styles.ueberschrift}>Top 5 Rated</h1>
        <div>
          <hr className={styles.introH1}></hr>
        </div>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselContainer}>
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`${styles.gridItemContent} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => searchOnYouTube(movie.title)}
            >
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
                  <p className={styles.releasedate}>
                    {formatDateGerman(movie.release_date)}
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

export default TopRated;
