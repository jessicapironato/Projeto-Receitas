import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconProfile from '../images/profileIcon.svg';
import iconSearch from '../images/searchIcon.svg';

class Header extends Component {
  // const [searchInput, setSearchInput] = useState(true);
  render() {
    const { title, caminho } = this.props;
    return (
      <section>
        <h1 data-testid="page-title">{title}</h1>
        <Link to="/profile">
          <img
            data-testid="profile-top-btn"
            src={ iconProfile }
            alt="Profile Icon"
          />
        </Link>
        { caminho && (
          <Link to="/">
            <img
              src={ iconSearch }
              alt="Search Icon"
              data-testid="search-top-btn"
            />
          </Link>
        )}
      </section>
    );
  }
}

Header.propTypes = {
  history: PropTypes.string,
  caminho: PropTypes.bool,
}.isRequired;

export default Header;
