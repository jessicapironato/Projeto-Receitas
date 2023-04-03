import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Login from '../pages/Login';
import Recipes from '../pages/Recipes';
import Drinks from '../pages/Drinks';
import Profile from '../pages/Profile';
// import firstComponent from '../pages/FirstPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Recipes } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        {/* <Route exact path="/done-recipes" component={ Recipes } /> */}
        {/* <Route exact path="/favorite-recipes" component={ Recipes } /> */}
        {/* <Route exact path="/meals/:id-da-receita" component={ Recipes } /> */}
        {/* <Route exact path="/drinks/:id-da-receita" component={ Recipes } /> */}
        {/* <Route exact path="/meals/:id-da-receita/in-progress" component={ Recipes } /> */}
        {/* <Route exact path="/drinks/:id-da-receita/in-progress" component={ Recipes } /> */}
      </Switch>
    );
  }
}

export default Routes;

// Routes.propTypes = {
//   nameState: PropTypes.string,
// }.isRequired;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
