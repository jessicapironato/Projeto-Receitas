import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './utils/rwrar';
import App from '../App';

describe('<Meals> Testa as  categorias dos botões de Meals ', () => {
  const pathnameMeals = '/meals';
  const TestIdBtnIconMealsBeef = 'Beef-category-filter';
  // const TestIdBtnIconMealsGoat = '${categoryName}-category-filter';
  // const TestIdBtnIconMealsChicken = '${categoryName}-category-filter';
  // const TestIdBtnIconMealsBreakfast = '${categoryName}-category-filter';
  // const TestIdBtnIconMealsDessert = '${categoryName}-category-filter';
  beforeEach(() => {
    global.fetch = jest.fn(fetch);
  });

  it('1. <Meals> Testa filtro Beef', async () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: [pathnameMeals] },
    );
    const buttonIconBeef = await screen.findByTestId(TestIdBtnIconMealsBeef);
    expect(buttonIconBeef).toBeVisible();

    userEvent.click(buttonIconBeef);

    const firstRecipeBeef = await screen.findByText(/beef and mustard pie/i);

    expect(firstRecipeBeef).toBeVisible();
  });
});

describe('<Drinks> Testa as  categorias dos botões de Drinks', () => {
  // const TestIdBtnIconDrinksOrdinary = '${categoryName}-category-filter';
  // const TestIdBtnIconDrinksCocktail = '${categoryName}-category-filter';
  // const TestIdBtnIconDrinksShake = '${categoryName}-category-filter';
  // const TestIdBtnIconDrinksOther = '${categoryName}-category-filter';
  // const TestIdBtnIconDrinksCocoa = '${categoryName}-category-filter';

  const TestIdBtnIconDrinksOrdinary = 'Ordinary Drink-category-filter';
  // const TestIdBtnAll = 'All-category-filter';

  const pathnameDrinks = '/drinks';
  beforeEach(() => {
    global.fetch = jest.fn(fetch);
  });

  it('1. <Drinks> Testa filtro Ordinary Drink', async () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: [pathnameDrinks] },
    );
    const buttonIconOrdinaryDrink = await screen
      .findByTestId(TestIdBtnIconDrinksOrdinary);
    expect(buttonIconOrdinaryDrink).toBeVisible();

    userEvent.click(buttonIconOrdinaryDrink);

    const firstRecipeDrink = await screen.findByText(/ordinary drink/i);

    expect(firstRecipeDrink).toBeVisible();
  });

  // it('2. <Drinks> Testa filtro All', async () => {
  //   renderWithRouterAndRedux(
  //     <App />,
  //     { initialEntries: [pathnameDrinks] },
  //   );
  //   const buttonIconAll = await screen.findByText(/all/i);
  //   expect(buttonIconAll).toBeVisible();

  //   userEvent.click(buttonIconAll);
  //   const gg = await screen.findByText(/gg/i);
  //   expect(gg).toBeVisible();
  // });
});
// Category Buttons: Patrick Fonseca, Jéssica Pironato;
