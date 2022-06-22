import React, { useState, useEffect } from "react";
import { Link , useHistory } from "react-router-dom"
import { postRecipe } from "../../redux/actions"
import { useDispatch , useSelector } from "react-redux"
import styles from '../CreateRecipes/CreateRecipes.module.css'


function validate(post){
    let errors = {}
    post.title
    ? (errors.title = "")
    :(errors.title) = "Your recipe needs a title!"

    post.summary
    ? (errors.summary = "")
    : (errors.summary = "Give a brief explanation of your recipe")
       
   post.instructions
   ? (errors.instructions = "")
   :(errors.instructions = "Dont forget to tell us how you did it")

   post.diets.lenght < 1 
   ?(errors.diets = "Choose at least one diet")
   :(errors.diets = "")
   parseInt(post.healthScore) <1
   ? (errors.healthScore = "Cant take a number bellow 1" )
   :(errors.healthScore= "")
   
 return errors
    }
   


   

export default function RecipeCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const allDiets = useSelector((state) => state.diets)

    const [errors, setErrors] = useState({})

    const [post, setPost] = useState({
        title: "",
        summary: "",
        spoonacularScore: 50,
        healthScore: 50,
        instructions: "",
        image: "",
        diets: []  
    })

    function handleChange(e){
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...post,
            [e.target.name]: e.target.value
        }))
    }

    
    function handleSelect(e){
        setPost({
            ...post,
            diets: [...post.diets, e.target.value]
        })
    //    console.log(post)
    }

    function handleDietDelete(deleteThis){
        setPost({
            ...post,
            diets: post.diets.filter(diet => diet !== deleteThis)
        })
    }

    function handleSubmit(e){
        const maximo = 35

       


        if(!post.title ){
            e.preventDefault()
            return alert("The recipe needs a title")
        } if (post.title.length > maximo){
            e.preventDefault()
            return alert("the title cannot exceed 35 characters")
        }
        else if(!post.summary) {
            e.preventDefault()
            return alert ("The recipe needs a summary")    
        } 
        else if (post.healthScore < 0 && post.healthScore > 100){
            e.preventDefault()
            return alert ("the health score cannot be less than 1 or greater than 100")
        }
        else if(!post.diets.length){
            e.preventDefault()
            return alert("You need to add at least one diet for the recipe")
        } else {
            if(!post.image.includes("https://") && !post.image.includes("http://")){
                e.preventDefault()
                return alert ("This isn't a valid image address")}
   

           dispatch(postRecipe(post))
            alert("Recipe sucessfully created!")
            setPost({
                title: "",
                summary: "",
                spoonacularScore: 50,
                healthScore: 50,
                instructions: "",
                image: "",
                diets: []
                })
            history.push('/home')
           
             
         }
        }
    
    return(
        <div className={styles.firstContainer}>
            <div >
            <Link to="/home" >
                <button className={styles.home} >HOME</button>
            </Link>
            </div>
            <h1 className={styles.recipeContainer}>Create your own Recipe</h1>
            <form >
                
                <div  className={styles.recipeContainer}>
                    <label >Títle</label>
                    <input className={styles.imput} type="text" value={post.title} name="title" onChange={(e) => handleChange(e)} ></input>
                    {errors.title && (<p >{errors.title}</p>)}
                </div>
                <div className={styles.recipeContainer}>
                    <label >Summary</label>
                    <textarea className={styles.imput} type="text" value={post.summary} name="summary" maxLength="1000" onChange={(e) => handleChange(e)}></textarea>
                    {errors.summary && (<p>{errors.summary}</p>)}
                </div>
                <div className={styles.recipeContainer}>
                    <label >Scoring in API Spoonacular</label>
                    <input className={styles.imput} type="range" min="0" max="100" value={post.spoonacularScore} name="spoonacularScore" onChange={(e) => handleChange(e)}></input>
                    {<p >{post.spoonacularScore}</p>}
                </div>
                <div className={styles.recipeContainer} >
                    <label>Health Score</label>
                    <input className={styles.imput}  type="range" min="0" max="100" value={post.healthScore} name="healthScore" onChange={(e) => handleChange(e)}></input>
                    {<p >{post.healthScore}</p>}
                </div>
                <div className={styles.recipeContainer}>
                    <label>Instructions</label>
                    <textarea className={styles.imput} type="text" value={post.instructions} name="instructions" onChange={(e) => handleChange(e)}></textarea>
                    {errors.instructions && (<p >{errors.instructions}</p>)}
                </div>
                <div className={styles.recipeContainer}>
                    <label >Image URL</label>
                    <input className={styles.imput} type="url" value={post.image} name="image" onChange={(e) => handleChange(e)}></input>
                </div>
                <div className={styles.recipeContainer} >
                    <select  onChange={(e)=> handleSelect(e)}>
                        <option value="" hidden name="diets" >Select Diets</option>
                            {allDiets?.map(diet => {
                            return ( <option value={diet.id} key={diet.id}>{diet.name}</option>)
                            })
                            } 
                    </select>
                    <ul className={styles.recipeContainer}>
                        <p>                            
                            {post.diets.map(diet => 
                            <div>
                                <p>{allDiets?.find(element => element.id === diet)?.name}</p>
                                <button  onClick={() => handleDietDelete(diet)}>x</button>
                            </div>
                            )}
                        </p>
                    </ul>
                </div>
                <div className={styles.recipeContainer}>
                <button className={styles.botonCreateRecipe}  type="submit" onClick={(e) => handleSubmit(e)}>Crear Receta</button>
                </div> 
           </form>
            
        </div>
    )


}


