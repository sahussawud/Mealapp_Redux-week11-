import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/mealAction'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FAVORITE:
            console.log(state.favoriteMeals);
            const indexMeal = state.favoriteMeals.findIndex((meal) => {
                return meal.id === action.mealId
            })

            console.log(indexMeal);
            if (indexMeal >= 0) {
                // state.favoriteMeals.splice(indexMeal, 1)
                const updatestate = [...state.favoriteMeals]
                updatestate.splice(indexMeal, 1)
                return {
                    ...state,
                    favoriteMeals: updatestate
                }
            } else {
                // state.favoriteMeals.push(state.meals.find(meal=> meal.id === action.mealId))
                const meal = state.meals.find((meal) => meal.id === action.mealId)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
            }
        // return state;

        default:
            return state;
    }
}

export default mealReducer;
