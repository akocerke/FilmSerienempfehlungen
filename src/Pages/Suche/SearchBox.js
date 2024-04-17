import React from 'react';
import styles from './Suche.module.css';

const SearchBox = (props) => {
    return (
        <div className={styles.searchBox}>
            <input
                className={styles.formControl}
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Was suchst du?...'
            />
        </div>
    );
};

export default SearchBox;
