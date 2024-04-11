import React from "react";
import styles from "./Favoriten.module.css";

const AddFavourites = () => {
  return (
    <div className={styles.addToFavourites}>
      <div className={styles.addToFavouritesC}>
        <span>Zu Favoriten hinzufügen</span>
        <svg
          style={{ marginTop: "0.2em" }}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          // class='bi bi-heart-fill'
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AddFavourites;
