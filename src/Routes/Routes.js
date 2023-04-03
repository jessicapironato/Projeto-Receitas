import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Login from '../pages/Login';
import Recipes from '../pages/Recipes';
// import firstComponent from '../pages/FirstPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Recipes } />
        {/* <Route path='*' component={ NotFound } /> */}
      </Switch>
    );
  }
}

export default Routes;

// Routes.propTypes = {
//   nameState: PropTypes.string,
// }.isRequired;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
