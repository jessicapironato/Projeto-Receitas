import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './utils/rwrar';
import App from '../App';
import fetch from '../../cypress/mocks/fetch';

describe('<Meals> Testa as  categorias dos botões de Meals ', () => {
  const pathnameMeals = '/meals';
  const TestIdBtnIconMealsBeef = 'Beef-category-filter';

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

    userEvent.click(buttonIconBeef);
  });
});

describe('<Drinks> Testa as  categorias dos botões de Drinks', () => {
  const TestIdBtnIconDrinksOrdinary = 'Ordinary Drink-category-filter';

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

    userEvent.click(buttonIconOrdinaryDrink);

    const gg = await screen.findByText(/gg/i);

    expect(gg).toBeVisible();
  });

  it('2. <Drinks> Testa filtro All', async () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: [pathnameDrinks] },
    );
    const buttonIconAll = await screen.findByText(/all/i);
    expect(buttonIconAll).not.toBeDisabled();
    expect(buttonIconAll).toBeVisible();

    userEvent.click(buttonIconAll);
    const gg = await screen.findByText(/gg/i);
    expect(gg).toBeVisible();
  });

  it('3. <Drinks> Testa filtro All', async () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: [pathnameDrinks] },
    );
    const buttonIconAll = await screen.findByText(/all/i);
    expect(buttonIconAll).not.toBeDisabled();
    expect(buttonIconAll).toBeVisible();

    userEvent.click(buttonIconAll);
    const gg = await screen.findByText(/gg/i);
    expect(gg).toBeVisible();
  });
});
// Category Buttons: Patrick Fonseca, Jéssica Pironato;
