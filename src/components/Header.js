import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <section>
    <header className={styles.Header} />
    <div>
      <Link to="/">CHARACTER LIST</Link>
    </div>
  </section>
);

export default Header;
