import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';

class MealsDetails extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="MealsDetails" history={ history } />
        <h1>Receitas</h1>
      </>
    );
  }
}

MealsDetails.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default MealsDetails;
