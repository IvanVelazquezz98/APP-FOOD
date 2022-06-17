import react from 'react'

import { Link , useParams} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect , useState} from "react";
import { getDetail , clearPage } from '../../redux/actions'

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
                
                
            {
                (detailRecipe.name ) ? 
                   <div >
                       <p>Cargando ...</p>
                    </div> 
                :
                    <div>
                        <img  src={detailRecipe?.image} alt="No Image Found"/>
                        <h1 >{detailRecipe?.title}</h1>
                        <h3 >Summary</h3>
                        <p >{detailRecipe?.summary}</p>                         
                        <h3 >Puntuación de salud</h3>
                        <p >{detailRecipe?.healthScore}</p>
                        <h3 >Dietas</h3>
                        <p >{detailRecipe.diets?.map(r => (<li>{r.name} </li>))}</p>
                        <h3 >Instrucciones</h3>
                        <p >{detailRecipe?.instructions}</p>
                    </div>
                    
                
            }
            </div>
            <div >
                <Link to="/Home">
                    <button >Go back!</button>
                </Link>
            </div>
        </div>
     )

}

export default RecipesDetail