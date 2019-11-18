const URL = 'http://xfiles-api.herokuapp.com/api/v1/characters';

export const getCharacters = () => {
  return fetch(URL)
    .then(res => res.json())
    .then(({ characters }) => characters.map(character => ({
      ...character,
      image: character.image || '../assets/placeholder.jpg'
    })));
};
