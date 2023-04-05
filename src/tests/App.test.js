import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from '../services/rwrar';

describe('Testes Login', () => {
  const email = 'alguem@email.com';
  const password = 'coxinha123';
  const emailTestID = 'email-input';
  const passwordTestID = 'password-input';
  const searchTopBtn = 'search-top-btn';

  it('1.Testa inputs', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(emailTestID);
    const passwordInput = screen.getByTestId(passwordTestID);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const buttonLogin = screen.getByRole('button', { name: 'Enter' });
    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toBeDisabled();

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(buttonLogin);

    expect(history.location.pathname).toBe('/meals');

    const buttonProfile = screen.getByTestId('profile-top-btn');
    expect(buttonProfile).toBeInTheDocument();

    userEvent.type(buttonProfile);
    expect(history.location.pathname).toBe('/profile');
  });

  it('2.Testa se o search renderiza corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(emailTestID);
    const passwordInput = screen.getByTestId(passwordTestID);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const buttonLogin = screen.getByRole('button', { name: 'Enter' });
    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toBeDisabled();

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(buttonLogin);

    expect(history.location.pathname).toBe('/meals');

    const searchIcon = screen.getByTestId(searchTopBtn);
    expect(searchIcon).toBeVisible();
    userEvent.click(searchIcon);

    waitFor(() => {
      const searchInput = screen.getByTestId(searchTopBtn);
      expect(searchInput).toBeVisible();
      userEvent.click(searchIcon);
      expect(searchInput).not.toBeVisible();
    });
  });

  it('3.Testa SearchBar na rota /meals', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const buttonLogin = screen.getByRole('button', { name: 'Enter' });
    const emailInput = screen.getByTestId(emailTestID);
    const passwordInput = screen.getByTestId(passwordTestID);
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.click(buttonLogin);

    expect(history.location.pathname).toBe('/meals');

    const buttonSearchBar = screen.getByTestId(searchTopBtn);
    expect(buttonSearchBar).toBeInTheDocument();

    userEvent.click(buttonSearchBar);
    const searchInput = await screen.findByTestId('search-input');
    const inputSearch = 'flour';
    waitFor(() => {
      expect(searchInput.toBeVisible());
      userEvent.type(buttonSearchBar, inputSearch);
      const ingredientRadioButton = screen.getByTestId('ingredient-search-radio');
      const firstLetterRadioButton = screen.getByTestId('first-letter-search-radio');
      expect(ingredientRadioButton).toBeInTheDocument();
      expect(ingredientRadioButton).not.toBeChecked();
      userEvent.selectOptions(ingredientRadioButton);
      expect(ingredientRadioButton).toBeChecked();
      expect(firstLetterRadioButton).not.toBeChecked();
    });

    const mockAlert = jest.spyOn(global, 'alert').mockImplementation(() => 'Your search must have only 1 (one) character');
    const buttonSearchFilter = screen.getByTestId('exec-search-btn');
    expect(buttonSearchFilter).toBeInTheDocument();
    const firstLetterRadioButton = screen.getByTestId('first-letter-search-radio');
    userEvent.click(firstLetterRadioButton);
    userEvent.click(buttonSearchFilter);
    waitFor(() => {
      expect(mockAlert).not.toHaveBeenCalled();
      mockAlert.mockRestore();
    });

    const mockAlertNotFound = jest.spyOn(global, 'alert').mockImplementation(() => 'Sorry, we haven\'t found any recipes for these filters.');
    waitFor(() => {
      expect(searchInput.toBeVisible());
      userEvent.type(buttonSearchBar, inputSearch);
      const nameRadioButton = screen.getByTestId('name-search-radio');
      expect(nameRadioButton).toBeInTheDocument();
      userEvent.click(nameRadioButton);
      userEvent.click(buttonSearchFilter);
      expect(mockAlertNotFound).toHaveBeenCalledTimes(1);
      mockAlertNotFound.mockRestore();
    });
  });

  it('4.Testa SearchBar na rota /drink', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const buttonLogin = screen.getByRole('button', { name: 'Enter' });
    const emailInput = screen.getByTestId(emailTestID);
    const passwordInput = screen.getByTestId(passwordTestID);
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.click(buttonLogin);

    const buttonDrink = screen.getByTestId('drinks-bottom-btn');

    userEvent.click(buttonDrink);

    expect(history.location.pathname).toBe('/drinks');

    const buttonSearchBar = screen.getByTestId(searchTopBtn);
    expect(buttonSearchBar).toBeInTheDocument();

    userEvent.click(buttonSearchBar);
    const searchInput = await screen.findByTestId('search-input');
    const inputDrink = 'vodka';
    const inputDrink2 = 'gin';

    waitFor(() => {
      userEvent.type(searchInput, inputDrink);
      expect(screen.getByText('vodka')).toBeInTheDocument();
    });
    waitFor(() => {
      userEvent.type(searchInput, inputDrink2);
      expect(screen.getByText('gin')).toBeInTheDocument();
    });
  });
});

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
// Requisito 12-15: Pair Programming André Porto,Gregório Bezerra
