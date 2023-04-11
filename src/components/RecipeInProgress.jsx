import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  modifyDoneRecipeOnStorage,
  modifyFavoriteOnStorage,
} from '../services/localStorage';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

class RecipeInProgress extends Component {
  state = {
    favorite: false,
  };

  render() {
    const { recipeDetails } = this.props;
    const { favorite } = this.state;
    return (
      <div>
        <img
          data-testid="recipe-photo"
          src={ recipeDetails[0].strMealThumb }
          alt="oi"
        />
        <h1 data-testid="recipe-title">{recipeDetails[0].strMeal}</h1>
        <h2 data-testid="recipe-category">
          {' '}
          {recipeDetails[0].strCategory}
          {' '}
        </h2>
        <p data-testid="instructions">{recipeDetails[0].strInstructions}</p>
        <form>
          {recipeDetails[1]
            .map((ingredient) => (
              <label
                htmlFor="ingredient"
                key={ `recipeInProgress${recipeDetails[0].idMeal}` }
              >
                {ingredient}
                <input type="checkbox" />
              </label>
            ))}
        </form>
        <div className="buttonsTopRecipe">
          <button
            className="buttonShareRecipe"
            // data-testid="share-btn"
            onClick={ () => {
              // copy(`http://localhost:3000${history.location.pathname}`);
              // this.setState({ copyText: true });
            } }
          >
            <img
              data-testid="share-btn"
              src={ shareIcon }
              alt="share"
            />
          </button>

          <button
            type="button"
            className="buttonFavoriteRecipe"
            onClick={ () => {
              this.setState((initial) => ({ favorite: !initial.favorite }));
              modifyFavoriteOnStorage(recipeDetails[0]);
            } }
          >
            <img
              data-testid="favorite-btn"
              src={ favorite ? blackHeart : whiteHeart }
              alt="favorite"
            />
          </button>
        </div>
        <button
          data-testid="finish-recipe-btn"
          type="button"
          onClick={ () => modifyDoneRecipeOnStorage(
            recipeDetails[0],
            new Date().toDateString(),
          ) }
        >
          Finish Recipe

        </button>
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
