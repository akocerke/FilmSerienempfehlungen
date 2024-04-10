import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Footer.module.css"; // Stile hier importieren

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <h1>Footer</h1>
      {/* Deine Hauptinhalt hier */}
      {showFooter && (
        <footer className="Footer">
          <nav>
            <ul>
              <li>
                <Link to="/">StartSeite</Link>
              </li>
              <li>
                <Link to="/Filme">Filme</Link>
              </li>
              <li>
                <Link to="/Serien">Serien</Link>
              </li>
              <li>
                <Link to="/Impressum">Impressum</Link>
              </li>
            </ul>
          </nav>
        </footer>
      )}
    </div>
  );
}

export default Footer;
