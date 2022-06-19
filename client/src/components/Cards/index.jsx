import React from 'react';
import styles from '../Cards/Card.module.css'
export default function Card({ image , title , diets }){

    return (
        <div className={styles.mainContainer} >
            <img className={styles.imagen} src={image} alt="Imagen no encontrada"/>
            <div className={styles.innerContainer} >
                <h3 className={styles.title} > {title}</h3>
                <h5 className={styles.diets}>{diets}</h5>
            </div>
        </div>
    )
}

