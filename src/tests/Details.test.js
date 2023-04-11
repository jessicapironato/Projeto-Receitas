import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, act } from '@testing-library/react';
import renderWithRouterAndRedux from '../services/rwrar';
import fetch from '../../cypress/mocks/fetch';
import App from '../App';

describe('Testa o componente Details', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetch);
  });

  const TestIdRecipeImage = 'recipe-photo';
  const TestIdRecipeTitle = 'recipe-title';
  const TestIdRecipeCategory = 'recipe-category';
  const TestIdRecipeInstructions = 'instructions';
  const TestIdRecipeVideo = 'video';
  const TestIdBtnRecipeStart = 'start-recipe-btn';
  const TestIdBtnRecipeShare = 'share-btn';
  const TestIdBtnRecipeFavorite = 'favorite-btn';
  const testPathMealCorba = '/meals/52977';

  it('1.<Meals>Testa a renderização correta em Meals', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    await act(async () => {
      history.push(testPathMealCorba);
    });

    const image = await screen.findByTestId(TestIdRecipeImage);
    const title = await screen.findByTestId(TestIdRecipeTitle);
    const category = await screen.findByTestId(TestIdRecipeCategory);
    const instructions = await screen.findByTestId(TestIdRecipeInstructions);
    const video = await screen.findByTestId(TestIdRecipeVideo);

    expect(image).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(category).toBeVisible();
    expect(instructions).toBeVisible();
    expect(video).toBeVisible();
  });

  it('2.<Drinks>Testa a renderização correta em Drinks', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    await act(async () => {
      history.push('/drinks/15997');
    });

    const image = await screen.findByTestId('recipe-photo');
    const title = await screen.findByTestId('recipe-title');
    const category = await screen.findByTestId('recipe-category');
    const instructions = await screen.findByTestId('instructions');

    expect(image).toBeVisible();
    expect(title).toBeVisible();
    expect(category).toBeVisible();

    expect(instructions).toBeVisible();
  });

  it('3.<Meals>Testa botão StartRecipe', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    await act(async () => {
      history.push(testPathMealCorba);
    });

    const buttonStartRecipe = await screen.findByTestId(TestIdBtnRecipeStart);
    expect(buttonStartRecipe).toBeInTheDocument();

    userEvent.click(buttonStartRecipe);
    expect(history.location.pathname).toBe('/meals/52977/in-progress');
  });

  it('4.<Meals>Testa botão ShareRecipe', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    await act(async () => {
      history.push(testPathMealCorba);
    });

    const buttonSharetRecipe = await screen.findByTestId(TestIdBtnRecipeShare);
    expect(buttonSharetRecipe).toBeInTheDocument();

    // userEvent.click(buttonStartRecipe);
    // expect(history.location.pathname).toBe('/meals/52977/in-progress');
  });
  it('5.<Meals>Testa botão FavoriteRecipe', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    await act(async () => {
      history.push(testPathMealCorba);
    });

    const buttonFavoriteRecipe = await screen.findByTestId(TestIdBtnRecipeFavorite);
    expect(buttonFavoriteRecipe).toBeInTheDocument();

    // userEvent.click(buttonFavoriteRecipe);
    // expect(history.location.pathname).toBe('/meals/52977/in-progress');
  });
});

// Teste de componente Details.test: Jéssica Pironato e Patrick Fonseca;
