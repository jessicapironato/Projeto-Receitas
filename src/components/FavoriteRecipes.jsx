import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class FavoriteRecipes extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header title="Favorite Recipes" history={ history } />
        <h1 data-testid="page-title">Favorite Recipes</h1>
      </div>
    );
  }
}

FavoriteRecipes.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default FavoriteRecipes;
