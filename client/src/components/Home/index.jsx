import react from 'react'
import { Link } from 'react-router-dom';
import {getRecipes , getFullRecipes , getDiets , clearPage} from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Card from '../Cards'
import SearchBar from '../../components/SearchBar';
import Paginado from './paginado';


 export default function Home() {
    const dispatch = useDispatch()

    const allRecipes = useSelector((state) => state.allRecipes)
    const allDiets = useSelector((state) => state.diets)

    useEffect(() => {
        dispatch(getRecipes())

    },[dispatch])

    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])

    const handleReload = () => {
        window.location.reload();
      }

    
    
    

    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe,indexOfLastRecipe)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
            <>
            <div>
            <button onClick={handleReload}>HOME</button>
             </div>
            
            <div>
                <Paginado recipesPerPage={recipesPerPage}
                 allRecipes={allRecipes.length} 
                 paginado={paginado}>
                 </Paginado>
            </div>
            
            <div>
                <SearchBar/>
            </div>
        <div>
        <div>
                {currentRecipes?.map(recipe => {
                    return (
                        <Link  to={`/recipe/${recipe.id}`}>
                        <Card image={recipe.image} title={recipe.title} diets={recipe.diets.map(r => <p >{r.name}</p>)} key={recipe.id} ></Card>
                        </Link>
                        )
                    })
                }
            </div> 
  
    </div>
    </>
     )

}

