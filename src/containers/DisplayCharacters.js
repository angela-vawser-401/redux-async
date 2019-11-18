import React, { useEffect } from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { connect } from 'react-redux';
import Characters from '../components/Characters';
import { getCharacters, getCharactersLoading } from '../selectors/charactersSelector';
import { fetchCharacters } from '../actions/charactersActions'; 

function DisplayCharacters({ characters, loading, fetchCharacters }) {
  useEffect(() => {
    fetchCharacters();
  }, []);

  if(loading) return <h1>The truth is out there...</h1>;

  return (
    <Characters characters={characters} />
  );
}

DisplayCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCharacters);
