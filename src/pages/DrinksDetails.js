import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import RecipeDetails from '../components/RecipeDetails';

class DrinksDetails extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="DrinksDetails" history={ history } />
        <RecipeDetails history={ history } />
        <h1>Receitas</h1>
      </>
    );
  }
}

DrinksDetails.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default DrinksDetails;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
