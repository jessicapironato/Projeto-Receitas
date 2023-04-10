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

export const modifyFavoriteOnStorage = ({
  idMeal, strArea, idDrink,
  strCategory, strMeal, strMealThumb,
  strDrink, strDrinkThumb, strAlcoholic }) => {
  // result
  const favoriteResult = {
    id: idMeal || idDrink,
    type: idMeal ? 'meal' : 'drink',
    nationality: strArea || '',
    category: strCategory || '',
    alcoholicOrNot: strAlcoholic || '',
    name: strMeal || strDrink,
    image: strDrinkThumb || strMealThumb,
  };
  const atualStorage = getKeyOnStorage(FAVORITE_RECIPES_KEY);
  if (atualStorage) {
    const isFavorite = atualStorage.some((recipe) => recipe.id === favoriteResult.id);
    if (isFavorite) {
      const newStorage = atualStorage
        .filter((recipe) => recipe.name !== favoriteResult.name);
      setFavoriteRecipesOnStorage([...newStorage]);
    } else {
      setFavoriteRecipesOnStorage([...atualStorage, favoriteResult]);
    }
  } else {
    setFavoriteRecipesOnStorage([favoriteResult]);
  }
};

export const modifyDoneRecipeOnStorage = ({
  idMeal, strArea, idDrink,
  strCategory, strMeal, strMealThumb,
  strDrink, strDrinkThumb, strAlcoholic }) => {
  const arrayTags = [];

  const doneResult = {
    id: idMeal || idDrink, // id da receita
    type: idMeal ? 'meal' : 'drink', // meal ou drink
    nationality: strArea || '', // nacionalidade da receita ou texto vazio
    category: strCategory || '', // categoria da receita ou texto vazio
    alcoholicOrNot: strAlcoholic || '', // alcólico ou não alcólico ou texto vazio
    name: strMeal || strDrink, // nome da receita
    image: strDrinkThumb || strMealThumb, // imagem da receita
    tags: arrayTags || [], // array de tags da receita ou array vazio
    doneDate: '', // quando a receita foi concluída
  };
  const atualStorage = getKeyOnStorage(DONE_RECIPES_KEY);
  if (atualStorage) {
    setDoneRecipesOnStorage([...atualStorage, doneResult]);
  } else {
    setDoneRecipesOnStorage([doneResult]);
  }
};

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
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
