import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import SearchBar from '../components/SearchBar';

class Meals extends Component {
  render() {
    const { history, apiResult } = this.props;

    const numberOfRecipes = 12;

    return (
      <div>
        <Header title="Meals" history={ history } />
        {/* <SearchBar /> */}

        <h1>Receitas</h1>
        <section>
          { apiResult.length > 0 && apiResult.map((recipe, index) => {
            if (index < numberOfRecipes) {
              return (
                <div
                  key={ recipe.idMeal }
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ recipe.strMealThumb }
                    alt="Finished recipe ilustration"
                    data-testid={ `${index}-card-img` }
                  />
                  <p
                    data-testid={ `${index}-card-name` }
                  >
                    { recipe.strMeal }
                  </p>

                </div>
              );
            }
            return null;
          })}
        </section>
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  apiResult: state.filterReducer.apiResult,
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

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
// Requisitos 16 a 18: Patrick Fonseca e Jéssica Pironato;
