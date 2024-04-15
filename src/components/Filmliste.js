import React from "react";
import styles from "./Filmliste.module.css";

const Filmliste = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className={styles.moviegrid} key={index}>
          <img src={movie.Poster} alt="movie"></img>
          {/* Overlay direkt nach dem Bild im moviegrid */}
          <div
            className={styles.overlay}
            onClick={() => props.handleFavouritesClick(movie)}
          ></div>
          <div className={styles.favI}>
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default Filmliste;
