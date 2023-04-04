import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (

      <div>
        <form htmlFor="search-input">
          <input
            type="text"
            name="search-input"
            data-testid="search-input"
          />

          <label htmlFor="ingredient">
            <input
              type="radio"
              name="ingredient"
            />
            Ingredient
          </label>

          <label htmlFor="name">
            <input
              type="radio"
              name="name"
              // data-testid="search-input"
              // onClick={}

            />
            Name
          </label>

          <label htmlFor="first-letter">
            <input
              type="radio"
              name="first-letter"
              // data-testid="search-input"
              // onClick={}

            />
            First Letter
          </label>

        </form>
        <button
          type="button"
          name="input-search"
          // onClick={ () => ()}
        >

          Search
        </button>

      </div>
    );
  }
}

export default SearchBar;
