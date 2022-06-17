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
                
            case "CLEAR_PAGE":
                return {
                    ...state,
                    allRecipes:[],
                    copyRecipes:[],
                    detail: []
                } 

                default: return state
        }
    }

    //export default rootReducer 
