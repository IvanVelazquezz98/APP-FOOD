import react from 'react'
import { Link } from 'react-router-dom';
import {getRecipes ,
     getDiets, 
     filteredByDiets,
     orderByTitle ,
     orderByScore} from '../../redux/actions';
     
import { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Card from '../Cards'
import SearchBar from '../../components/SearchBar';
import Paginado from './paginado';
import styles from '../Home/Home.module.css'



 export default function Home() {
    const dispatch = useDispatch()

    const allRecipes = useSelector((state) => state.allRecipes)
    const allDiets = useSelector((state) => state.diets)

    const [order,setOrder] = useState("")
    const [score,setScore] = useState("")

    useEffect(() => {
        dispatch(getRecipes())

    },[dispatch])

    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])

    function handleSortedRecipesTitle(e){
        dispatch(orderByTitle(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
        e.preventDefault()
    }

    function handleSortedRecipesScore(e){
        dispatch(orderByScore(e.target.value))
        setCurrentPage(1)
        setScore(e.target.value)
        e.preventDefault();
    }

    function handleFilteredDiets(e){
        dispatch(filteredByDiets(e.target.value))
        setCurrentPage(1)
        e.preventDefault();
    }

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
    <div className={styles.background}>
        <div className={styles.firstContainer}>
            <button className={styles.home} onClick={handleReload}>HOME</button>
        
        <div className={styles.imputContainer}>
            <select  onChange={e => handleSortedRecipesTitle(e)}>
                <option value="" >Select Order Name</option>
                <option value="" >Disordered</option>
                <option value= "Asc">Ascendant</option>
                <option value ="des">Descendant</option>
            </select>
            <select  onChange={e => handleSortedRecipesScore(e)}>
                <option value="" >Select Health Score</option> 
                <option value="MAXHS">Max HealthScore</option>
                <option value="MINHS">Min HealthScore</option>
            </select>
            <select onChange={e => handleFilteredDiets(e)}>
                    <option value="">Select Recipes</option>
                    <option value="">All</option>
                    {allDiets.map((d) => (
                    <option value={d.name} key={d.id}>{d.name}</option>
                    ))}
                </select>
        </div>

        <div className={styles.createRecipe}> 
            <Link to="/CreateRecipe">
            <button className={styles.botonCreateRecipe}> Created Recipe </button>
            </Link>
                
        </div>
         </div>         
        <div  >
            <Paginado 
             recipesPerPage={recipesPerPage}
             allRecipes={allRecipes.length} 
             paginado={paginado}>
            </Paginado>
        </div>
            
        <div  >
            <SearchBar setCurrentPage={setCurrentPage}/>
        </div>
        
        <div  >
            <div className={styles.recipeContainer}>
                {currentRecipes?.map(recipe => {
                    return (
                        <Link className={styles.link} to={`/recipe/${recipe.id}`}>
                          <Card 
                                image={recipe.image}
                                title={recipe.title} 
                                diets={recipe.diets.map(r => <p  className={styles.diets}> {r.name}</p>)} 
                                key={recipe.id} >
                           </Card>
                        </Link>
                        )
                    })
                }
            </div> 
  
        </div>
        
    </div>
    </>
     )

}

