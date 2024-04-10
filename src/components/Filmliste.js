import React from 'react';
import styles from './Filmliste.module.css'

const Filmliste = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
                <div className={styles.moviegrid}>
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