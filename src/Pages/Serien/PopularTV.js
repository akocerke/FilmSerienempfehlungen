import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../src/apiServiceTV";
import Content from "../../components/Content/Content";


const PopularTV = () => {
     const [movies, setMovies] = useState([]);
        useEffect(() => { 
            const fetchMoviesData = async () => {
                 const moviesData = await fetchMovies();
                  setMovies(moviesData); };
                   fetchMoviesData(); }, []); 
                   
                   return ( 
                   <Content>
                   <div> <h1>Populäre Serien</h1> 
                   {movies.map((movie) => ( 
                   <div key={movie.id}> 
                   <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}alt={movie.name}/>
                   <h2>{movie.name}</h2> 
                   <p>{movie.overview}</p> 
                   </div> ))} </div> 
                   </Content>
                   );
                };
                   
                   
export default PopularTV;