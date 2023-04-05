import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import Meals from '../pages/Meals';
import renderWithRouterAndRedux from '../services/rwrar';

describe('Testes Login', () => {
  const email = 'alguem@email.com';
  const password = 'coxinha123';
  const emailTestID = 'email-input';
  const passwordTestID = 'password-input';

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

    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    expect(searchIcon).toBeVisible();
  });

  it('3.Testa SearchBar', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const buttonLogin = screen.getByRole('button', { name: 'Enter' });
    const emailInput = screen.getByTestId(emailTestID);
    const passwordInput = screen.getByTestId(passwordTestID);
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.click(buttonLogin);

    expect(history.location.pathname).toBe('/meals');

    const buttonSearchBar = screen.getByTestId('search-top-btn');
    expect(buttonSearchBar).toBeInTheDocument();

    userEvent.click(buttonSearchBar);
    const searchInput = await screen.findByTestId('search-input');
    const inputSearch = 'flour';
    waitFor(() => {
      expect(searchInput.toBeVisible());
      userEvent.type(buttonSearchBar, inputSearch);
      const ingredientRadioButton = screen.getByTestId('ingredient-search-radio');
      expect(ingredientRadioButton).toBeInTheDocument();
      userEvent.selectOptions(ingredientRadioButton);
    });

    const mockAlert = jest.spyOn(global, 'alert').mockImplementation(() => 'Your search must have only 1 (one) character');
    const buttonSearchFilter = screen.getByTestId('exec-search-btn');
    expect(buttonSearchFilter).toBeInTheDocument();
    const firstLetterRadioButton = screen.getByTestId('first-letter-search-radio');
    userEvent.click(firstLetterRadioButton);
    userEvent.click(buttonSearchFilter);
    waitFor(() => {
      expect(mockAlert).toHaveBeenCalledTimes(1);
      mockAlert.mockRestore();
    });
  });
});

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
