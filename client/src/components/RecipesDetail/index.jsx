import react from 'react'

import { Link , useParams , useHistory} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect } from "react";
import { getDetail , clearPage } from '../../redux/actions'
import styles from '../RecipesDetail/RecipesDetail.module.css'


export default function RecipesDetail (id) {

    const dispatch = useDispatch()
    const recipeId = useParams()
    const detailRecipe = useSelector((state) => state.detail) 

    useEffect(() => {
        dispatch(getDetail(recipeId.id))

        //return() =>{
          //  dispatch(clearPage())
        //}
            
        
    },[dispatch,id])

  
    return (
        <div >
            <div>
                <div className={styles.firstContainer}>
                <Link to="/Home">
                    <button className={styles.home} >Go back!</button>

                </Link>
            </div>
                
                
             {
                
                (detailRecipe?.length == 0 ) ? 
                   <div >
                      <p>Loading ...</p>
                    </div> 
                :
                
                    <div className={styles.innerContainer}>
                        <img className={styles.imagen} src={detailRecipe.image ? (detailRecipe.image) : (<img src="https://shorturl.ae/eEB8K" alt="img plate" />)} alt="img recipe" /> 
                        <h1 >{detailRecipe.title}</h1>
                        <h3 className={styles.title}>Summary</h3>
                        <p className={styles.content} >{detailRecipe.summary ? (detailRecipe.summary) : (<p>-</p>) }</p>                         
                        <h3 className={styles.title} >Puntuación de salud</h3>
                        <p className={styles.content}>{detailRecipe.healthScore  ? (detailRecipe.healthScore) : (<p>-</p>)}</p>
                        <h3 className={styles.title} >Dietas</h3>
                        <p className={styles.content}>{detailRecipe.diets.map(r => (<li key={r.name}>{r.name} </li>))}</p>
                        <h3 className={styles.title}>Instrucciones</h3>
                        <p className={styles.content}>{detailRecipe.instructions ? (detailRecipe.instructions) : (<p>-</p>) }</p>
                    </div>
                    

                    
                
            }
            </div>
            
        </div>
        
     )

}

