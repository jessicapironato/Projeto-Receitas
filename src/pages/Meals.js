import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import SearchBar from '../components/SearchBar';

class Meals extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="Meals" history={ history } />
        {/* <SearchBar /> */}

        <h1>Receitas</h1>
        <Footer />
      </>
    );
  }
}

Meals.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Meals;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
