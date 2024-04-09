import { useEffect } from "react";
import styles from './Pageloader.module.css';
import Video from "../../assets/media/pageloader.mp4";


const Pageloader = () => {
    useEffect(() => {
      const handleDomContentLoaded = () => {
        const pageloader = document.querySelector(`.${styles.pageloader}`); // Verwende Backticks, um den Wert von `styles.pageloader` einzufügen
        if (pageloader) {
          setTimeout(() => {
            pageloader.style.display = 'none';
          }, 10000);
        }
      };
      document.addEventListener('DOMContentLoaded', handleDomContentLoaded);
      return () => {
        document.removeEventListener('DOMContentLoaded', handleDomContentLoaded);
      };
    }, []); // Leeres Array als Abhängigkeit, um sicherzustellen, dass der Effekt nur einmal ausgeführt wird
    return (
        <div className={styles.pageloader}>
          <video autoPlay muted>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );

  }
  export default Pageloader;