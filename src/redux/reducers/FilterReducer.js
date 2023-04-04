import { API_DRINK, API_FOOD, API_RESULT } from '../actions';

const INITIAL_STATE = {
  apiFood: {},
  apiDrink: {},
  apiResult: [],
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_DRINK:
    return {
      ...state,
      apiDrink: { text: action.text, api: action.payload },
    };
  case API_FOOD:
    return {
      ...state,
      apiFood: { text: action.text, api: action.payload },
    };
  case API_RESULT:
    return {
      ...state,
      apiResult: action.payload,
    };

  default:
    return state;
  }
};

export default filterReducer;
