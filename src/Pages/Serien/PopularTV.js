import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../src/apiServiceTV";

const PosterSRC () => {
    let temp =  "https://www.countryflags.io/".concat(cityToCodeMatcher(city));
    return temp.concat("/shiny/64.png");
}

const PopularTV = () => {
     const [movies, setMovies] = useState([]);
        useEffect(() => { 
            const fetchMoviesData = async () => {
                 const moviesData = await fetchMovies();
                  setMovies(moviesData); };
                   fetchMoviesData(); }, []); 
                   
                   return ( <div> <h1>Populäre Serien</h1> 
                   {movies.map((movie) => ( 
                   <div key={movie.id}> 
                   <img src={PosterSRC(movie.poster_path)} alt="TVPoster"/>
                   <h2>{movie.name}</h2> 
                   <p>{movie.overview}</p> 
                   </div> ))} </div> 
                   );
                };
                   
                   
export default PopularTV;