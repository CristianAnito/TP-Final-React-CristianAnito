import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo-container">
          <Link to="/" aria-label="GameReact, ir al inicio">
            <span className="logo-mark" aria-hidden="true">G</span>
            <span className="logo-text">GameReact</span>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};