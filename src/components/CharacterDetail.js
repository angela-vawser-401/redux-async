import React from 'react';
import PropTypes from 'prop-types';
import styles from './Detail.css';

const CharacterDetail = ({ name, image, description }) => (
  <section className={styles.Detail}>
    <img src={image} />
    <h2>{name}</h2>
    <p>{description}</p>
  </section>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CharacterDetail;
