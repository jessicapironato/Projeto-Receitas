import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Details from './Details';
import { apiCarrocel } from '../redux/actions';

class RecipeDetails extends Component {
  async componentDidMount() {
    await this.didMountApiCarrocel();
  }

  didMountApiCarrocel = async () => {
    const { history: { location: { pathname } }, dispatch } = this.props;
    const SEIS = 6;
    const idRecipes = pathname.replace(/[^0-9]/g, '');
    const foodOrDrink = pathname === `/meals/${idRecipes}` ? 'drinks' : 'meals';
    const urlFood = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const urlDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const urlApi = pathname === `/meals/${idRecipes}` ? urlDrink : urlFood;
    const response = await fetch(urlApi);
    const data = await response.json();
    const results = (data[foodOrDrink])
      .filter((result, index) => (index < SEIS ? result : null));
    dispatch(apiCarrocel(results));
  };

  render() {
    const { history } = this.props;
    const idRecipes = history.location.pathname.replace(/[^0-9]/g, '');
    return (
      <>
        <h1>Details</h1>
        {history.location.pathname === `/meals/${idRecipes}`
          ? (
            <Details
              history={ history }
              imgSrc="strMealThumb"
              nameRecipe="strMeal"
              iframe
              category="strCategory"
            />)
          : (
            <Details
              history={ history }
              imgSrc="strDrinkThumb"
              nameRecipe="strDrink"
              iframe={ false }
              category="strAlcoholic"
            />)}
      </>
    );
  }
}

RecipeDetails.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default connect()(RecipeDetails);
