export const API_FOOD = 'API_FOOD';
export const API_DRINK = 'API_DRINK';
export const API_RESULT = 'API_RESULT';
export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';

export const apiFood = (payload, text) => ({
  type: API_FOOD,
  payload,
  text,
});
export const apiDrink = (payload, text) => ({
  type: API_DRINK,
  payload,
  text,
});
export const requestApi = (payload) => ({
  type: API_RESULT,
  payload,
});

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
