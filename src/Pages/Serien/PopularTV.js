import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSeries } from "../../../src/apiService";
import Content from "../../components/Content/Content";
import styles from "./Serien.module.css"

const PopularTV = () => { 
   const [movies, setMovies] = useState([]);
   useEffect(() => {
     const fetchSeriesData = async () => {
       const moviesData = await fetchSeries();
       setMovies(moviesData);
     };
     fetchSeriesData(); 
   }, []);
 
   // Funktion zur Konvertierung des Datums in das deutsche Format
   const formatDateGerman = (dateString) => {
     const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
     return new Date(dateString).toLocaleDateString('de-DE', options);
   };
 
   return (
     <Content>
       <div className={styles.ontop}>
         <h1 className={styles.ueberschrift}>Populäre Serien</h1>
       </div>
       <hr className={styles.new5} />
       <div className={styles.gridContainer}>
         {movies.map((movie) => (
          <Link to={`/serienseite/${movie.id}`} key={movie.id}>          
           <div className={styles.gridItemContent} key={movie.id}>
             <div className={styles.gridItem}>
               <img
                 src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                 alt={movie.name}
               />
             </div>
             <div className={styles.beschreibung}>
               <div className={styles.titleContainer}>
                 <h5 className={styles.title}>{movie.name}</h5>
               </div>
               <div className={styles.releasedateContainer}> 
                 {/* Veröffentlichungsdatum im deutschen Format anzeigen */}
                 <p className={styles.releasedate}>{formatDateGerman(movie.first_air_date)}</p>
               </div>
             </div>
           </div>
           </Link>
         ))}
       </div>
     </Content>
   );
 };
 

export default PopularTV;