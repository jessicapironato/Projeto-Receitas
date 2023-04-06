import { API_DRINK, API_FOOD, API_RESULT, BTN_SEARCH, CLEAR_STATE,
  API_RESULT_FILTER } from '../actions';

const INITIAL_STATE = {
  apiFood: {},
  apiDrink: {},
  apiResult: [],
  btnSearch: false,
  apiResultFilter: [],
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
  case API_RESULT_FILTER:
    return {
      ...state,
      apiResultFilter: action.payload,
    };
  case BTN_SEARCH:
    return {
      ...state,
      btnSearch: !(state.btnSearch),
    };
  case CLEAR_STATE:
    return {
      ...state,
      [action.nameState]: [],
    };

  default:
    return state;
  }
};

export default filterReducer;
