import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Profile extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="Profile" history={ history } />
        <h1>Receitas</h1>

        <button
          type="button"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>

        <Footer />

      </>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Profile;

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
