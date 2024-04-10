import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Suche.module.css';
import Filmliste from '../../components/Filmliste';
import FilmListeHeader from '../../components/FilmListeHeader';
import SearchBox from '../../components/SearchBox';
import AddFavourites from '../../components/Favoriten';

const Neuheiten = () => {
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
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<FilmListeHeader heading='Suche' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				</div>
				<div className='row'>
				<Filmliste
					movies={movies}
					favouriteComponent={AddFavourites}
					handleFavouritesClick={addFavouriteMovie}
				/>
			</div>
			</div>
	);
};

export default Neuheiten;