import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
        <ul>
          {(apiResult.length === 0 ? apiResultLocal : apiResult).map((recipe, index) => {
            if (index < numberOfRecipes) {
              return (
                <li
                  key={ recipe[`id${foodOrDrink}`] }
                  data-testid={ `${index}-recipe-card` }
                >
                  <button
                    type="button"
                    onClick={
                      () => history.push(`${pathname}/${recipe[`id${foodOrDrink}`]}`)
                    }
                  >
                    <img
                      src={ recipe[`str${foodOrDrink}Thumb`] }
                      alt="Finished recipe ilustration"
                      data-testid={ `${index}-card-img` }
                    />
                  </button>
                  <p
                    data-testid={ `${index}-card-name` }
                  >
                    { recipe[`str${foodOrDrink}`] }
                  </p>

                </li>
              );
            }
            return null;
          })}
        </ul>
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
