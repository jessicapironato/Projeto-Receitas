import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from '../services/rwrar';

describe('Testes Login', () => {
  const email = 'alguem@email.com';
  const password = 'coxinha123';

  it('1.Testa inputs', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
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

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
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
});

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
