import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSeries } from "../../../src/apiService";
import Content from "../../components/Content/Content";
import styles from "./SerienCarrusel.module.css";

const CarruselTV = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeriesData = async () => {
      const seriesData = await fetchSeries();
      setSeries(seriesData.slice(0, 5));
    };
    fetchSeriesData();
  }, []);

  // Función para formatear la fecha en formato alemán
  const formatDateGerman = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  return (
    <Content>
      <div className={styles.ontop}>
        <h1 className={styles.ueberschrift}>Top 5 Serien</h1>
        <div>
          <hr className={styles.introH1}></hr>
        </div>
      </div>
      <div className={styles.carrusel}>
        <div className={styles.carruselContainer}>
          {series.map((serie) => (
            <Link
              key={serie.id}
              to={`/serienseite/${serie.id}`} // Verlinken zur Serienseite
              className={styles.gridItemContent}
            >
              <div className={styles.gridItem}>
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`}
                  alt={serie.name}
                />
              </div>
              <div className={styles.beschreibung}>
                <div className={styles.titleContainer}>
                  <h5 className={styles.title}>{serie.name}</h5>
                </div>
                <div className={styles.releasedateContainer}>
                  <p className={styles.releasedate}>
                    {formatDateGerman(serie.first_air_date)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default CarruselTV;
