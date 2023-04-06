import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryButtons from './CategoryButtons';

class Meals extends Component {
  state = {
    apiResultLocal: [],
  };

  async componentDidMount() {
    const result = await this.didMountApiRequest();
    this.setState({
      apiResultLocal: result,
    });
  }

  didMountApiRequest = async () => {
    const { history: { location: { pathname } } } = this.props;
    const urlApi = pathname === '/meals' ? 'https://www.themealdb.com/api/json/v1/1/search.php?s=' : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(urlApi);
    const data = await response.json();
    return Object.values(data)[0];
  };

  render() {
    const { history, history: { location: { pathname } }, apiResult } = this.props;
    const { apiResultLocal } = this.state;

    const numberOfRecipes = 12;
    const foodOrDrink = pathname === '/meals' ? 'Meal' : 'Drink';

    return (
      <section>
        { (apiResult.length === 1)
        && history.push(`${pathname}/${apiResult[0][`id${foodOrDrink}`]}`) }
        <CategoryButtons history={ history } />
        {apiResult.length === 0 ? (apiResultLocal.map((recipe, index) => {
          if (index < numberOfRecipes) {
            return (
              <div
                key={ recipe[`id${foodOrDrink}`] }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ recipe[`str${foodOrDrink}Thumb`] }
                  alt="Finished recipe ilustration"
                  data-testid={ `${index}-card-img` }
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  { recipe[`str${foodOrDrink}`] }
                </p>

              </div>
            );
          }
          return null;
        }))
          : (apiResult.length > 0 && apiResult.map((recipe, index) => {
            if (index < numberOfRecipes) {
              return (
                <div
                  key={ recipe[`id${foodOrDrink}`] }
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ recipe[`str${foodOrDrink}Thumb`] }
                    alt="Finished recipe ilustration"
                    data-testid={ `${index}-card-img` }
                  />
                  <p
                    data-testid={ `${index}-card-name` }
                  >
                    { recipe[`str${foodOrDrink}`] }
                  </p>

                </div>
              );
            }
            return null;
          }))}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResult: state.filterReducer.apiResult,
  btnSearch: state.filterReducer.btnSearch,
});

Meals.propTypes = {
  history: PropTypes.string,
  apiResult: PropTypes.arrayOf(PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    idMeal: PropTypes.string,
  })).isRequired,
}.isRequired;

export default connect(mapStateToProps)(Meals);
