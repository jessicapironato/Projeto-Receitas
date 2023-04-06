import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Recipes from '../components/Recipes';

class Drinks extends Component {
  render() {
    const { history, btnSearch } = this.props;
    return (
      <>
        <Header title="Drinks" history={ history } />
        { btnSearch && <SearchBar history={ history } />}
        <h1>Receitas</h1>
        <Recipes history={ history } />
        <Footer history={ history } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResult: state.filterReducer.apiResult,
  btnSearch: state.filterReducer.btnSearch,
});

Drinks.propTypes = {
  history: PropTypes.string,
  apiResult: PropTypes.arrayOf(PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    idMeal: PropTypes.string,
  })).isRequired,
}.isRequired;

export default connect(mapStateToProps)(Drinks);

// Requisitos 16 a 18: Patrick Fonseca e Jéssica Pironato;
