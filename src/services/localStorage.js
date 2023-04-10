export const USER_KEY = 'user';
export const DONE_RECIPES_KEY = 'doneRecipes';
export const FAVORITE_RECIPES_KEY = 'favoriteRecipes';
export const IN_PROGRESS_RECIPES_KEY = 'inProgressRecipes';

export const setUserOnStorage = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const setDoneRecipesOnStorage = (recipe) => {
  localStorage.setItem(DONE_RECIPES_KEY, JSON.stringify(recipe));
};

export const setFavoriteRecipesOnStorage = (recipe) => {
  localStorage.setItem(FAVORITE_RECIPES_KEY, JSON.stringify(recipe));
};

export const setInProgressRecipesOnStorage = (recipe) => {
  localStorage.setItem(IN_PROGRESS_RECIPES_KEY, JSON.stringify(recipe));
};

export const getKeyOnStorage = (key) => {
  const result = localStorage.getItem(key);
  return JSON.parse(result);
};

export const modifyUserOnStorage = (property, newValue) => {
  const user = getKeyOnStorage(USER_KEY);
  user[property] = newValue;
  setUserOnStorage(user);
};

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
// doneRecipes
// [{
//   id: id-da-receita,
//   type: meal-ou-drink,
//   nationality: nacionalidade-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita,
//   doneDate: quando-a-receita-foi-concluida,
//   tags: array-de-tags-da-receita-ou-array-vazio
// }]
// favoriteRecipes
// [{
//     id: id-da-receita,
//     type: meal-ou-drink,
//     nationality: nacionalidade-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita
// }]
// inProgressRecipes
// {
//   drinks: {
//       id-da-bebida: [lista-de-ingredientes-utilizados],
//       ...
//   },
//   meals: {
//       id-da-comida: [lista-de-ingredientes-utilizados],
//       ...
//   }
// }
