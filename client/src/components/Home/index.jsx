import react from 'react'
import { Link } from 'react-router-dom';
import {getRecipes , getFullRecipes , getDiets} from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Card from '../Cards'



 export default function Home() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getRecipes())
    },[dispatch])

    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])

    
    const allRecipes = useSelector((state) => state.allRecipes)
    const allDiets = useSelector((state) => state.diets)
    


    
    return (
            <>
        <div>
        <div >
                {allRecipes?.map(recipe => {
                    return (
                        <Link to={`/recipe/${recipe.id}`}>
                        <Card image={recipe.image} title={recipe.title}  key={recipe.id} ></Card>
                        </Link>
                        )
                    })
                }
            </div>     
         

        
    </div>
    </>
     )

}

