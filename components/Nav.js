import style from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <header>
      <a className="assistive-text" href="#main" title="SKIP TO CONTENT">
        Skip to main content
      </a>

      <nav className={style.nav}>
        <p className={style.introText}>Lina Wang • Front End Developer • Portfolio • 2022 • Stockholm</p>
        {/* <a>LinkedIn</a>
        <a>Github</a>
        <a>Lighthouse</a> */}
      </nav>
    </header>
  );
}
