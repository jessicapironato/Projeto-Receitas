import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconProfile from '../images/profileIcon.svg';
import iconSearch from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

// rotas que renderizam o ícone de pesquisa
const pathNames = ['/meals', '/drinks'];

class Header extends Component {
  state = {
    btnSearch: false,
  };
  // const [searchInput, setSearchInput] = useState(true);

  enableSearchBar = () => {
    this.setState((initialState) => ({
      btnSearch: !initialState.btnSearch,
    }));
  };

  render() {
    const { title, history } = this.props;
    const { btnSearch } = this.state;
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
            onClick={ this.enableSearchBar }
          >
            <img
              src={ iconSearch }
              alt="Search Icon"
              data-testid="search-top-btn"
            />
          </button>
        )}
        { btnSearch && <SearchBar history={ history } />}
      </header>
    );
  }
}
// colocar links dentro da navy
Header.propTypes = {
  history: PropTypes.string,
  caminho: PropTypes.bool,
}.isRequired;

export default Header;
