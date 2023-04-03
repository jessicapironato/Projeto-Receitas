import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Login from '../pages/Login';
// import NotFound from '../pages/NotFound';
// import firstComponent from '../pages/FirstPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route exact path='/fisrtPage' component={ FirstPage } /> */}
        {/* <Route path='*' component={ NotFound } /> */}
      </Switch>
    );
  }
}

export default Routes;

// Routes.propTypes = {
//   nameState: PropTypes.string,
// }.isRequired;
