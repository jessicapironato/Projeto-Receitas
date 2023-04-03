import { combineReducers } from 'redux';
import userReducer from './UserReducer';

// const INITIAL_STATE = {};
// const exampleReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   default:
//     return state;
//   }
// };
const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
