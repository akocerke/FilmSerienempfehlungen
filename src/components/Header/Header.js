import React from "react";
import styles from "./Header.module.css";

const Header = () =>  {
    return (
        <>
        <div className={styles["container-fluid"]}>
            <div className="logo">
                    <img src="logo.png" alt="FilmRausch Logo" class={styles["logo"]}/>
            </div>
        </div>
        </>
    );
};



export default Header