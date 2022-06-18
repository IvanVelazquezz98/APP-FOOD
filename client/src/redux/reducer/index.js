const initialState = {
        allRecipes: [],   
        copyRecipes: [], 
        diets: [], 
        detail: []
}




 export default function rootReducer(state = initialState , action){
    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                allRecipes: action.payload,
                copyRecipes: action.payload,
                
                detail: []
            } 

            case "GET_DIETS" :
                return {
                    ...state,
                    diets: action.payload
                }

            case "GET_DETAIL":
                return {
                    ...state,
                    detail : action.payload
                }

            case "SEARCH_RECIPE":
                return {
                    ...state,
                    allRecipes: action.payload
                }

            case "FILTERED_BY_DIETS":
                const recipes = state.copyRecipes
                const dietFiltered = action.payload === "" ? recipes : recipes.filter(recipe => {
                        let diet = recipe.diets.map(d => d.name)
                        if (diet.includes(action.payload)){
                            return recipe
                        }
                    })  
                    return {
                        ...state,
                        allRecipes: dietFiltered
                    }


             case "ORDER_BY_TITLE":
                    const sortedRecipesTitle = action.payload === "Asc" ? 
                        state.allRecipes.sort(function( a , b ) {
                            if(a.title.toLowerCase() > b.title.toLowerCase()){
                                 return 1
                            }
                            if (b.title.toLowerCase() > a.title.toLowerCase()){
                                    return -1
                                }
                            return 0
                        }) : state.allRecipes.sort(function( a , b ) {
                            if(a.title.toLowerCase() > b.title.toLowerCase()){
                                return -1
                            }
                            if (b.title.toLowerCase() > a.title.toLowerCase()){
                                 return 1
                            }
                            return 0
                        })
                    return {
                        ...state,
                         allRecipes: sortedRecipesTitle
                    }

                    case "ORDER_BY_SCORE":
            
                        const sortedRecipesScore = action.payload === "MAXHS" ? 
                            state.allRecipes.sort(function(a,b) {
                                if(a.healthScore < b.healthScore){
                                    return 1
                                }
                                if (b.healthScore < a.healthScore){
                                    return -1
                                }
                                return 0
                            }) : state.allRecipes.sort(function(a,b) {
                                if(a.healthScore < b.healthScore){
                                    return -1
                                }
                                if (b.healthScore < a.healthScore){
                                    return 1
                                }
                                return 0
                            })
                        return {
                            ...state,
                            allRecipes: sortedRecipesScore
                        }

            case "CLEAR_PAGE":
                return {
                    ...state,
                    detail: []
                } 

                default: return state
        }
    }

    //export default rootReducer 
