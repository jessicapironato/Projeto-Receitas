import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DoneRecipes from '../components/DoneRecipes';

class DoneRecipesPage extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <DoneRecipes history={ history } />
      </div>
    );
  }
}

DoneRecipesPage.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default DoneRecipesPage;
