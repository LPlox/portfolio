import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <header>
      <a className="assistive-text" href="#main" title="SKIP TO CONTENT">
        Skip to main content
      </a>

      <nav className={styles.nav}>
        <p className={styles.introText}>Lina Wang • Stockholm • Sweden</p>
      </nav>
    </header>
  );
}
