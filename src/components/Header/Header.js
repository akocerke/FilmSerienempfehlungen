import React from "react";
import styles from "./Header.module.css";

const Header = () =>  {
    return (
        <>
        <div className={styles["container-fluid"]}>
            <div class={styles["logo"]}>
                    <img src="logo.png" alt="FilmRausch Logo" class={styles["logoSize"]}/>
            </div>
        </div>
        </>
    );
};



export default Header