import react from 'react'

import { Link , useParams} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect , useState} from "react";
import { getDetail , clearPage } from '../../redux/actions'
import styles from '../RecipesDetail/RecipesDetail.module.css'
function RecipesDetail (id) {

    const dispatch = useDispatch()
    const recipeId = useParams()
    const detailRecipe = useSelector((state) => state.detail) 

    useEffect(() => {
        dispatch(getDetail(recipeId.id))

        return () => {
            dispatch(clearPage())
        }
    },[dispatch])

   //falta solucionar la recipe o1
    return (
        <div >
            <div>
                <div className={styles.firstContainer}>
                <Link to="/Home">
                    <button className={styles.home} >Go back!</button>
                </Link>
            </div>
                
                
            {
                (detailRecipe.name ) ? 
                   <div >
                       <p>Cargando ...</p>
                    </div> 
                :
                    <div className={styles.innerContainer}>
                        <img className={styles.imagen} src={detailRecipe?.image} alt="No Image Found"/>
                        <h1 >{detailRecipe.title}</h1>
                        <h3 className={styles.title}>Summary</h3>
                        <p className={styles.content} >{detailRecipe.summary}</p>                         
                        <h3 className={styles.title} >Puntuación de salud</h3>
                        <p className={styles.content}>{detailRecipe.healthScore}</p>
                        <h3 className={styles.title} >Dietas</h3>
                        <p className={styles.content}>{detailRecipe.diets.map(r => (<li>{r.name} </li>))}</p>
                        <h3 className={styles.title}>Instrucciones</h3>
                        <p className={styles.content}>{detailRecipe?.instructions}</p>
                    </div>
                    
                
            }
            </div>
            
        </div>
        
     )

}

export default RecipesDetail