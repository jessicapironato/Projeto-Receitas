import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  getKeyOnStorage,
  setInProgressRecipesOnStorage,
  IN_PROGRESS_RECIPES_KEY,
} from '../services/localStorage';
import { idPathname } from '../tests/utils/helpers';

class Input extends Component {
  state = {
    check: false,
  };

  componentDidMount() {
    const { history: { location: { pathname } }, nameLabel } = this.props;
    // const { check } = this.state;
    const { idRecipes, foodOrDrink } = idPathname(pathname);
    const localStorage = getKeyOnStorage(IN_PROGRESS_RECIPES_KEY);

    // console.log([...localStorage[foodOrDrink][idRecipes]]);
    const localStorageToState = localStorage && [...localStorage[foodOrDrink][idRecipes]]
      .includes(nameLabel);

    this.setState({ check: localStorageToState });
  }

  handleCheckedIngredient = ({ target }) => {
    const { history: { location: { pathname } }, nameLabel } = this.props;
    // const { check } = this.state;
    const { idRecipes, foodOrDrink } = idPathname(pathname);
    const { name, value } = target;
    const result = target.type === 'checkbox' ? target.checked : value;
    this.setState({
      [name]: result,
    });

    const localStorage = getKeyOnStorage(IN_PROGRESS_RECIPES_KEY)
    || { [foodOrDrink]: {
      [idRecipes]: [],
    } };
    const newIngredient = result ? false : nameLabel;

    const newIngredients = localStorage
    && [...localStorage[foodOrDrink][idRecipes], nameLabel]
      .filter((ingredient) => ingredient !== newIngredient);

    const newLocalStorage = localStorage
    && { ...localStorage,
      [foodOrDrink]: { ...localStorage[foodOrDrink],
        [idRecipes]: [...newIngredients] } };
    // console.log(newLocalStorage);
    setInProgressRecipesOnStorage(newLocalStorage);
  };

  render() {
    const { type, nameLabel, dataTestId } = this.props;
    const { check } = this.state;
    return (
      <label className={ check ? 'risk' : '' } htmlFor="check" data-testid={ dataTestId }>
        {nameLabel}
        <input
          type={ type }
          name="check"
          checked={ check }
          onChange={ this.handleCheckedIngredient }
          id="check"
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  nameLabel: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  dataTestId: PropTypes.string,
}.isRequired;

Input.defaultProps = {
  nameLabel: '',
  value: '',
  name: '',
  onChange: null,
};

export default Input;
