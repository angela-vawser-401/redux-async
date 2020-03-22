import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacter } from '../actions/charactersActions';
import CharacterDetail from '../components/CharacterDetail';
import { getCharacter, getCharactersLoading } from '../selectors/charactersSelector';

const DisplayCharacterDetail = ({ match }) => {
  const character = useSelector(state => getCharacter(state, match.params.name));
  const loading = useSelector(getCharactersLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!character) {
      dispatch(fetchCharacter(match.params.name));
    }
  }, []);

  if(loading) return <h1>The truth is out there...</h1>;
  if(!character) return <h1>Trust No One</h1>;

  return (
    <CharacterDetail {...character} />
  );
};

DisplayCharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DisplayCharacterDetail;
