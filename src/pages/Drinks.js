import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Drinks extends Component {
  render() {
    const { history, apiResult } = this.props;
    const numberOfRecipes = 12;
    return (
      <>
        <Header title="Drinks" history={ history } />

        <h1>Receitas</h1>
        <section>
          { (apiResult.length === 1) && history.push(`/drinks/${apiResult[0].idDrink}`) }
          { apiResult.length > 0 && apiResult.map((recipe, index) => {
            if (index < numberOfRecipes) {
              return (
                <div
                  key={ recipe.idDrink }
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ recipe.strDrinkThumb }
                    alt="Finished recipe ilustration"
                    data-testid={ `${index}-card-img` }
                  />
                  <p
                    data-testid={ `${index}-card-name` }
                  >
                    { recipe.strDrink }
                  </p>

                </div>
              );
            }
            return null;
          })}
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResult: state.filterReducer.apiResult,
});

Drinks.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Drinks);

// Requisitos 16 a 18: Patrick Fonseca e Jéssica Pironato;
