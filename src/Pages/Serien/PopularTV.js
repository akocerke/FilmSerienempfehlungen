import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../src/apiServiceTV";
import Content from "../../components/Content/Content";
import styles from "./Serien.module.css"


const PopularTV = () => {
     const [movies, setMovies] = useState([]);
        useEffect(() => { 
            const fetchMoviesData = async () => {
                 const moviesData = await fetchMovies();
                  setMovies(moviesData); };
                   fetchMoviesData(); }, []); 
                   
                   return ( 
                   <Content>
                    <div>
                    <h1 className={styles.ueberschrift}>Populäre Serien</h1> 
                    </div>

                    <div className={styles.gridContainer}>  {/* Kompletter Container */}
                    
                   {movies.map((movie) => ( 
                    <div className={styles.gridItemContent}>
                   <div key={movie.id} className={styles.gridItem}> 
                   <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}alt={movie.name} className={styles.posterimg}/>
                   <h2 className={styles.title}>{movie.name}</h2> 
                   </div>
                   </div> ))} </div> 
                   </Content>
                   );
                };
                   
                   
export default PopularTV;