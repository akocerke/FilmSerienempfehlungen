import { useEffect } from "react";
import styles from './Pageloader.module.css';
import Video from "../../assets/media/pageloader.mp4";

const Pageloader = () => {
  useEffect(() => {
    const handleDomContentLoaded = () => {
      const pageloader = document.querySelector(`.${styles.pageloader}`);
      if (pageloader) {
        setTimeout(() => {
          pageloader.style.display = 'none';
        }, 2000);
      }
    };
    document.addEventListener('DOMContentLoaded', handleDomContentLoaded);
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDomContentLoaded);
    };
  }, []);

  useEffect(() => {
    // Video-Element auswählen
    const video = document.querySelector(`.${styles.pageloader} video`);
    // Wenn das Video gefunden wurde, die Wiedergabegeschwindigkeit anpassen
    if (video) {
      video.playbackRate = 2; // Hier können Sie die Wiedergabegeschwindigkeit einstellen (z. B. 2 für doppelte Geschwindigkeit)
    }
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
