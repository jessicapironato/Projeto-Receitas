import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterRecipes } from '../redux/actions';

class CategoryButtons extends Component {
  state = {
    request: [],
  };

  async componentDidMount() {
    const request = await this.apiRequest();
    this.setState({
      request,
    });
  }

  apiRequest = async () => {
    const { history } = this.props;
    const urlApi = history.location.pathname === '/meals' ? 'https://www.themealdb.com/api/json/v1/1/list.php?c=list' : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(urlApi);
    const data = await response.json();
    return Object.values(data)[0];
  };

  render() {
    const { dispatch } = this.props;
    const { request } = this.state;
    const numberOfCategories = 5;
    return (
      <section>
        {
          (request.length > 0) ? (
            <nav>
              <button
                data-testid="All-category-filter"
                onClick={ () => dispatch(filterRecipes('')) }
              >
                All
              </button>

              {request.map(({ strCategory }, index) => {
                if (index < numberOfCategories) {
                  return (
                    <button
                      key={ index }
                      data-testid={ `${strCategory}-category-filter` }
                      onClick={ () => dispatch(filterRecipes(strCategory)) }
                    >
                      { strCategory }
                    </button>
                  );
                }
                return null;
              })}
            </nav>
          ) : <p> Loading...</p>

        }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResultFilter: state.filterReducer.apiResultFilter,
});

CategoryButtons.propTypes = {
  history: PropTypes.string,
  apiRequest: PropTypes.arrayOf(PropTypes.shape({
    strCategory: PropTypes.string,
  })).isRequired,
}.isRequired;

export default connect(mapStateToProps)(CategoryButtons);
