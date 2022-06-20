import React from "react";
import styles from '../Home/Paginado.module.css'


export default function Paginado({recipesPerPage, allRecipes, paginado}){
    const pageNumber = []
    
    for(let i = 0; i < Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumber.push(i+1)
    }

    return (
        <nav>
            <ul className={styles.ul} >
                { pageNumber?.map(number => (
                    <ul  key={number}>
                        <a className={styles.botonpersonalizado} onClick={()=> paginado(number) } >{number}</a>
                    </ul>
                ))
                }
            </ul>
        </nav>
    )
}
