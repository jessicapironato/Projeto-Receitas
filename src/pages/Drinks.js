import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Drinks extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="Drinks" history={ history } />

        <h1>Receitas</h1>
        <Footer />
      </>
    );
  }
}

Drinks.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Drinks;

// Requisitos 16 a 18: Patrick Fonseca e Jéssica Pironato;
