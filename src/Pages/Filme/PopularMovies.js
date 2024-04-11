import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../src/apiService";
import Content from "../../components/Content/Content";
import styles from "./Filme.module.css"


const PopularMovies = () => {
     const [movies, setMovies] = useState([]);
        useEffect(() => { 
            const fetchMoviesData = async () => {
                 const moviesData = await fetchMovies();
                  setMovies(moviesData); };
                   fetchMoviesData(); }, []); 
                   
                   return ( 
                   <Content>
                    <div>
                    <h1 className={styles.ueberschrift}>Populäre Filme</h1> 
                    </div>

                    <div className={styles.gridContainer}>  {/* Kompletter Container */}
                    
                   {movies.map((movie) => ( 
                    <div className={styles.gridItemContent}>
                   <div key={movie.id} className={styles.gridItem}> 
                   <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}alt={movie.name} className={styles.posterimg}/>
                   <h2 className={styles.title}>{movie.title}</h2> 
                   <h3 className={styles.releasedate}>{movie.release_date}</h3>
                   <p className={styles.beschreibung}>{movie.overview}</p> 
                   </div>
                   </div> ))} </div> 
                   </Content>
                   );
                };
                   
                   
export default PopularMovies;