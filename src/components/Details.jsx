import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { recipeDetails } from '../redux/actions';

class RecipeDetails extends Component {
  componentDidMount() {
    const { history } = this.props;
    this.requestApi(history.location.pathname);
  }

  requestApi = async (pathname) => {
    const { dispatch } = this.props;
    const idRecipes = pathname.replace(/[^0-9]/g, '');
    const urlMeals = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipes}`;
    const urlDrinks = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipes}`;
    const urlApi = pathname === `/meals/${idRecipes}` ? urlMeals : urlDrinks;
    const response = await fetch(urlApi);
    const data = await response.json();
    const foodOrDrink = pathname === `/meals/${idRecipes}` ? 'meals' : 'drinks';
    const result = data[foodOrDrink][0];

    const arrayUtils = ['idMeal',
      'strMealThumb', 'strMeal', 'strCategory', 'strInstructions',
      'strSource', 'strDrink', 'idDrink', 'strDrinkThumb', 'strAlcoholic'];

    const regexIngredient = /strIngredient/i;
    const regexMeasure = /strMeasure/i;
    console.log(result);
    const unInfo = Object.entries(result)
      .filter((key) => arrayUtils.includes(key[0]));

    const listIngredients = Object.entries(result)
      .filter((key) => regexIngredient
        .test(key[0])).filter((ingredient) => ingredient[1]).map((ingre) => (
        ingre.length > 1 ? ingre[1] : null));
    //  talvez seja melhor usar filter no lugar do map
    const listMeasure = Object.entries(result)
      .filter((key) => regexMeasure
        .test(key[0])).filter((measure) => measure[1]).map((mea) => (
        mea.length > 1 ? mea[1] : null));

    const newResult = [Object.fromEntries(unInfo), listIngredients, listMeasure];

    console.log(newResult);
    dispatch(recipeDetails(newResult));
  };

  render() {
    const { recipeDetails2, imgSrc, nameRecipe, iframe, category, apiCarrocel } = this.props;
    return (
      recipeDetails2.length > 0 ? (
        <section>
          <img
            data-testid="recipe-photo"
            src={ recipeDetails2[0][imgSrc] }
            alt={ recipeDetails2[0][nameRecipe] }
          />
          <h1 data-testid="recipe-title">{recipeDetails2[0][nameRecipe]}</h1>
          <h2 data-testid="recipe-category">{recipeDetails2[0][category]}</h2>

          <p data-testid="instructions">{(recipeDetails2[0]).strInstructions}</p>
          {iframe && (
            <iframe
              data-testid="video"
              width="853"
              height="480"
              src={ `https://www.youtube.com/embed/${(recipeDetails2[0]).strSource}` }
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          )}
          { recipeDetails2[1].map((detail, index) => (
            // O index na key pode dar muitos erros
            detail.length > 1 ? (
              <div key={ `${detail}${index}` }>
                <p data-testid={ `${index}-ingredient-name-and-measure` }>
                  {' '}
                  {detail}
                  {' '}
                </p>
              </div>
            ) : null
          ))}
          { recipeDetails2[2].map((detail, index) => (
            // O index na key pode dar muitos erros
            detail.length > 1 ? (
              <div key={ `${detail}${index}` }>
                <p data-testid={ `${index}-ingredient-name-and-measure` }>
                  {' '}
                  {detail}
                  {' '}
                </p>
              </div>
            ) : null
          ))}
          {}
        </section>
      ) : <h1>Loading...</h1>
    );
  }
}

RecipeDetails.propTypes = {
  history: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  recipeDetails2: state.filterReducer.recipeDetails,
  apiCarrocel: state.filterReducer.apiCarrocel,
});

export default connect(mapStateToProps)(RecipeDetails);
