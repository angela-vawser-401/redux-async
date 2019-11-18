import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import styles from './node_modules/Header.css';

const Header = () => (
  <header className={styles.Header}>
    <Link to="/">X-FILES RULES!</Link>
  </header>
);

export default Header;
