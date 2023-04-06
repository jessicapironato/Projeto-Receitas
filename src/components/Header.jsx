import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import iconProfile from '../images/profileIcon.svg';
import iconSearch from '../images/searchIcon.svg';
import { btnSearch } from '../redux/actions';

// rotas que renderizam o ícone de pesquisa
const pathNames = ['/meals', '/drinks'];

class Header extends Component {
  // const [searchInput, setSearchInput] = useState(true);

  render() {
    const { title, history, dispatch } = this.props;
    return (
      <header>
        <h1 data-testid="page-title">{title}</h1>

        <button
          type="button"
          onClick={ () => history.push('/profile') }
        >
          <img
            src={ iconProfile }
            alt="Profile Icon"
            data-testid="profile-top-btn"
          />
        </button>

        { pathNames.includes(history.location.pathname) && (

          <button
            type="button"
            onClick={ () => dispatch(btnSearch()) }
          >
            <img
              src={ iconSearch }
              alt="Search Icon"
              data-testid="search-top-btn"
            />
          </button>
        )}
      </header>
    );
  }
}
Header.propTypes = {
  history: PropTypes.string,
  caminho: PropTypes.bool,
}.isRequired;

export default connect()(Header);
