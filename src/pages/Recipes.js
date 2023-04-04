import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
// import SearchBar from '../components/SearchBar';

class Recipes extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="Meals" history={ history } />
        {/* <SearchBar /> */}

        <h1>Receitas</h1>
      </>
    );
  }
}

Recipes.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Recipes;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
