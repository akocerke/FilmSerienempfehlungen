import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../src/apiService";

const PopularMovies = () => {
     const [movies, setMovies] = useState([]);
        useEffect(() => { 
            const fetchMoviesData = async () => {
                 const moviesData = await fetchMovies();
                  setMovies(moviesData); };
                   fetchMoviesData(); }, []); 
                   
                   return ( <div> <h1>Populäre Filme</h1> 
                   {movies.map((movie) => ( 
                   <div key={movie.id}> 
                   <h2>{movie.title}</h2> 
                   <p>{movie.overview}</p> 
                   </div> ))} </div> 
                   );
                };
                   
                   
export default PopularMovies;