import React from 'react';
import styles from '../Pages/Suche/Suche.module.css'

const Filmliste = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
                <div className={styles.imagecontainer}>
                <img src={movie.Poster} alt='movie'></img>
                <div onClick={() => props.handleFavouritesClick(movie)} className='overlay'>
                    <FavouriteComponent />
                </div>
            </div>
			))}
		</>
	);
};

export default Filmliste;