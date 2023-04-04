import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class DoneRecipes extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header title="Done Recipes" history={ history } />

        <h1 data-testid="page-title">Done Recipes</h1>
      </div>
    );
  }
}

DoneRecipes.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default DoneRecipes;
