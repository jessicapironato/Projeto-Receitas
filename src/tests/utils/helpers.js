export const idPathname = (pathname) => {
  const idRecipes = pathname.replace(/[^0-9]/g, '');
  let foodOrDrink = '';
  if (idRecipes) {
    foodOrDrink = pathname === `/meals/${idRecipes}` ? 'meals' : 'drinks';
  } else {
    foodOrDrink = pathname === '/meals' ? 'meals' : 'drinks';
  }
  const infoUrl = { idRecipes, foodOrDrink };
  return infoUrl;
};
