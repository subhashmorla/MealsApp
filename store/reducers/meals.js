import { MEALS } from "../../data/dummy";
import { TOGGLE_FAV } from "../actions/meals";

const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favMeals: [],
};

const mealsReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const existingId = state.favMeals.findIndex((meal) => {
        return meal.id === action.mealId;
      });

      if (existingId >= 0) {
        const updateFavMeals = [...state.favMeals];
        updateFavMeals.splice(existingId, 1);
        return { ...state, favMeals: updateFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id == action.mealId);
        return { ...state, favMeals: state.favMeals.concat(meal) };
      }
    default:
      return state;
  }
};

export default mealsReducer;
