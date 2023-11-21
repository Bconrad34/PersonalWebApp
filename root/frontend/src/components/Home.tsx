import React from 'react';
import Menu from './Menu';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {

  return (
    <div className={styles.home}>
      <div className={styles.name}>Brock Conrad</div>
      <Menu />
      {/* ... your existing code ... */}
    </div>
  );
};

export default Home;