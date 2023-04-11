import { IN_PROGRESS_RECIPES } from '../actions';
// import {
//   getKeyOnStorage,
//   IN_PROGRESS_RECIPES_KEY,
// } from '../../services/localStorage';

const INITIAL_STATE = {
  progressRecipes: { meals: [], drinks: [] },
};

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IN_PROGRESS_RECIPES:
    return {
      ...state,
      progressRecipes: {
        ...state.progressRecipes,
        [action.mealOrDrink]: [...state.progressRecipes[action.mealOrDrink],
          action.idRecipe],
      },
    };
    // { ...atualStorage,
    //   [mealOrDrink]: { ...atualStorage[mealOrDrink], ...progressResult } }
  default:
    return state;
  }
};

export default recipesReducer;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
