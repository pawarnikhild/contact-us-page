import styles from './NavigationBar.module.css'
const NavigationBar = () => {
  return (
    // <nav className={styles.navigationBar}>
    <nav className={`container ${styles.navigationBar}`}>
      <div className="logo">
        <img src="/images/logo.png" alt="Do something coding"/>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
