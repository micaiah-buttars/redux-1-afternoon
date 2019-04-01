import {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const ADD_RECIPE = 'ADD_RECIPE'
export const RESET_FIELDS = 'RESET_FIELDS'




function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return {...state, name: action.payload}
        case UPDATE_CATEGORY:
            return {...state, category: action.payload}
        case UPDATE_AUTHOR_FIRST:
            return {...state, authorFirst: action.payload}
        case UPDATE_AUTHOR_LAST:
            return {...state, authorLast: action.payload}
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, action.payload]
            return {...state, ingredients: newIngredients}
        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, action.payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPE:
            const recipe = {
                name: state.name,
                category: state.category,
                authorFirst: state.authorFirst,
                authorLast: state.authorLast,
                ingredients: state.ingredients,
                instructions: state.instructions
            }
            const newRecipe = [...state.recipes, recipe]
            return {...state, recipes: newRecipe}
        case RESET_FIELDS:
            return {
                ...state, 
                name: initialState.name,
                category: initialState.category,
                authorFirst: initialState.authorFirst,
                authorLast: initialState.authorLast,
                ingredients: initialState.ingredients,
                instructions: initialState.instructions 
            }
        default:
            return state
    }
}



export default createStore(reducer)


