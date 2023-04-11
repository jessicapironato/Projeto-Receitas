import { combineReducers } from 'redux';
import recipesReducer from './RecipesReducer';
import filterReducer from './FilterReducer';

// const INITIAL_STATE = {};
// const exampleReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   default:
//     return state;
//   }
// };
const rootReducer = combineReducers({
  recipesReducer,
  filterReducer,
});

export default rootReducer;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
