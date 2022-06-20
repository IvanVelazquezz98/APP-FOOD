import React from "react"
import {useState , useEffect} from "react"
import { useDispatch  } from "react-redux";
import { searchRecipe } from "../../redux/actions"
import { Link } from 'react-router-dom';
import { clearPage , getRecipes } from "../../redux/actions";
import styles from '../SearchBar/SearchBar.module.css'


export default function SearchBar({title , setCurrentPage}){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
       
    }

     //function handleSubmit(e){
       // e.preventDefault()
        //dispatch(searchRecipe(name))
        //setName("")
     //}
     function handleSubmit(e){ 
        e.preventDefault(); 
        if(!name){ 
        alert("ingrese un nombre") 
        }else{ 
         
        dispatch(searchRecipe(name))
        setName(e.target.value); 
        setName("") 
        setCurrentPage(1)
        console.log(e)
        } 
        }
    

  
    return (
        <div className={styles.searchContainer}>
            
            <input className={styles.imput} type="text" placeholder="Search Recipe..." onChange={(e) => handleInputChange(e)}></input>
            <button className={styles.boton} type="submit"  onClick={(e) => handleSubmit(e)}>Buscar</button>
            </div>
            )
    }
