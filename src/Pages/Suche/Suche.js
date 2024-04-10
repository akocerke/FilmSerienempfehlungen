import React, { useState, useEffect } from 'react';
import Filmliste from '../../components/Filmliste';
import FilmListeHeader from '../../components/FilmListeHeader';
import SearchBox from '../../components/SearchBox';
import AddFavourites from '../../components/Favoriten';
import Content from '../../components/Content/Content';
import styles from './Suche.module.css';

const Suche = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <Content>
            <div className={styles.movieapp}>
                <div className={styles.row}>
                    <FilmListeHeader heading='Suche' />
                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className={styles.imagecontainer}>
                    <Filmliste
                        movies={movies}
                        favouriteComponent={AddFavourites}
                        handleFavouritesClick={addFavouriteMovie}
                    />
                </div>
            </div>
        </Content>
    );
};

export default Suche;
