import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Website</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.featuredSection}>
          <h2>Featured Content</h2>
          {/* Add your featured content here */}
        </section>
        <section className={styles.contentSection}>
          <h2>Latest News</h2>
          {/* Add your latest news content here */}
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Website</p>
      </footer>
    </div>
  );
};

export default HomePage;
