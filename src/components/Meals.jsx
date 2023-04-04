import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Recipes from '../pages/Recipes';

class Meals extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="Meals" history={ history } />
        <Recipes />
        <h1>Receitas</h1>
      </>
    );
  }
}
Meals.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Meals;
