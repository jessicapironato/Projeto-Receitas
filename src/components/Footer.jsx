import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import iconDrinks from '../images/drinkIcon.svg';
import iconMeals from '../images/mealIcon.svg';
import { clearState } from '../redux/actions';

class Footer extends Component {
  render() {
    const { dispatch, history } = this.props;
    return (
      <div>
        <footer
          data-testid="footer"
        >
          <button
            type="button"
            onClick={ () => {
              dispatch(clearState('apiResult'));
              history.push('/drinks');
            } }
          >
            <img
              src={ iconDrinks }
              alt="Drink Icon"
              data-testid="drinks-bottom-btn"
            />
          </button>
          <button
            type="button"
            onClick={ () => {
              dispatch(clearState('apiResult'));
              history.push('/meals');
            } }
          >
            <img
              src={ iconMeals }
              alt="Meals Icon"
              data-testid="meals-bottom-btn"
            />
          </button>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {
  history: PropTypes.string,
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Footer);

// Requisitos 16 a 18: Patrick Fonseca e Jéssica Pironato;
