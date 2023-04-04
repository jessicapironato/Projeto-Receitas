import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FavoriteRecipes from '../components/FavoriteRecipes';

class FavoriteRecipesPage extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <FavoriteRecipes history={ history } />
      </div>
    );
  }
}

FavoriteRecipesPage.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default FavoriteRecipesPage;
