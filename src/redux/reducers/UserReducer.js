import { CHANGE_SIGNAL } from '../actions';

const INITIAL_STATE = {
  first: '',
  second: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
};

export default userReducer;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
