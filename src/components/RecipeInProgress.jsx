import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  modifyDoneRecipeOnStorage,
  DONE_RECIPES_KEY,
  getKeyOnStorage,
} from '../services/localStorage';

class RecipeInProgress extends Component {
  render() {
    const { recipeDetails } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ () => modifyDoneRecipeOnStorage(
            recipeDetails[0],
            new Date().toDateString(),
          ) }
        >
          Finish Recipe

        </button>
        {console.log(getKeyOnStorage(DONE_RECIPES_KEY))}
      </div>

    );
  }
}

RecipeInProgress.propTypes = {
  recipeDetails: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  recipeDetails: state.filterReducer.recipeDetails,
  progressRecipes: state.recipesReducer.progressRecipes,
});

export default connect(mapStateToProps)(RecipeInProgress);

// Requisitos 31 e 32: Jéssica e Gregório;
