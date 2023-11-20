import React from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Brock Conrad</h1>
        <p className={styles.description}>
          Welcome to my cool styled Next.js page!
        </p>
      </main>
    </div>
  );
};

export default Home;