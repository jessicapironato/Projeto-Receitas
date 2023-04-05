import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconDrinks from '../images/drinkIcon.svg';
import iconMeals from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    // const { history } = this.props;
    return (
      <div>
        <footer
          data-testid="footer"
        >
          <Link to="/drinks">
            <button
              type="button"
              // onClick={ () => history.push('/drinks') }
            >
              <img
                src={ iconDrinks }
                alt="Drink Icon"
                data-testid="drinks-bottom-btn"
              />
            </button>
          </Link>
          <Link to="/meals">
            <button
              type="button"
              // onClick={ () => history.push('/meals') }
            >
              <img
                src={ iconMeals }
                alt="Meals Icon"
                data-testid="meals-bottom-btn"
              />
            </button>
          </Link>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Footer;

// Requisitos 16 a 18: Patrick Fonseca e Jéssica Pironato;
