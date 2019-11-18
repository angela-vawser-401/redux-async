import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import PropTypes from './node_modules/prop-types';

const Character = ({ name, image }) => (
  <Link to={`/characters/${name}`}>
    <figure>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
