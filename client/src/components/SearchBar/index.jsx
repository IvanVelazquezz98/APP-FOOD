import React from "react"
import {useState , useEffect} from "react"
import { useDispatch  } from "react-redux";
import { searchRecipe } from "../../redux/actions"
import { Link } from 'react-router-dom';
import { clearPage , getRecipes } from "../../redux/actions";


export default function SearchBar({title}){
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
      function handleSubmit(e) { 
            e.preventDefault(); 
            if (!name) { 
              alert("ingrese un nombre") 
            } else { 
              
            dispatch(searchRecipe(name));    
            setName(e.target.value); 
            setName("") 
        console.log(e)
             
         
              
            } 
          }
    

  
    return (
        <div >
            
            <input type="text" placeholder="Search Recipe..." onChange={(e) => handleInputChange(e)}></input>
            <button  type="submit"  onClick={(e) => handleSubmit(e)}>Buscar</button>
            </div>
            )
    }
