import React, { Component } from 'react';
import iconDrinks from '../images/drinkIcon.svg';
import iconMeals from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <button
            type="button"
            // onClick={ () => history.push('/profile') }
          >
            <img
              src={ iconDrinks }
              alt="Drink Icon"
              data-testid="drinks-bottom-btn"
            />
          </button>
          <button
            type="button"
            // onClick={ () => history.push('/profile') }
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

export default Footer;
