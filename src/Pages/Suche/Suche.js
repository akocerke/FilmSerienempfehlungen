import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilmListeHeader from "../../components/FilmListeHeader";
import SearchBox from "./SearchBox";
import Content from "../../components/Content/Content";
import styles from "./Suche.module.css";

const Suche = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
 

  const getMovieRequest = async (searchValue) => {
    const apiKey = "1ad397f85b6fe90915ecb92e15c0a3cc";
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=de-DE&query=${searchValue}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };



  useEffect(() => {
    if (searchValue.trim() !== "") {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  const formatDateGerman = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('de-DE', options);
  };

  return (
    <Content>
      <div className={styles.movieapp}>
        <div className={styles.row}>
          <FilmListeHeader heading="Suche" className={styles.ueberschrift} />
          <hr className={styles.introH1}></hr>
          <div className={styles.searchDiv}>
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              className={styles.searchBoxSm}
              inputClassName={styles.formControl}
            />
          </div>
        </div>
        <div className={styles.gridContainer}>
          {movies.map((movie) => (
            <Link key={movie.id} to={movie.media_type === "movie" ? `/filmseite/${movie.id}` : `/serienseite/${movie.id}`} className={styles.gridItemContent}>
              <div className={styles.gridItem}>
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : 'https://via.placeholder.com/185x278'}
                  alt={movie.title || movie.name}
                />
              </div>
              <div className={styles.beschreibung}>
                <div className={styles.titleContainer}>
                  <h5 className={styles.title}>{movie.title || movie.name}</h5>
                </div>
                <div className={styles.releasedateContainer}>
                  <p className={styles.releasedate}>
                    Veröffentlichungsdatum: {formatDateGerman(movie.release_date || movie.first_air_date)}
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

export default Suche;
