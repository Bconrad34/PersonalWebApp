import React from 'react';
import styles from '../styles/Home.module.css';

const Menu: React.FC = () => {

  return (
    <nav>
      <ul className={styles.menu}>
        <li><a href="#!">About</a></li>
        <li><a href="#!">Experience</a></li>
        <li><a href="#!">Links</a></li>
        <li><a href="#!">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;