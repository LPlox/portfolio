import style from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <header>
      <a className="assistive-text" href="#main" title="SKIP TO CONTENT">
        Skip to main content
      </a>

      <nav className={style.nav}>
        <p className={style.introText}>Lina Wang • Stockholm • Sweden</p>
      </nav>
    </header>
  );
}
