import { Outlet, Link } from "react-router-dom";
import './Nav.css'

function Nav() {
  return (
    <>
      <nav>
        <ul className="nav-link-wrapper">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <div className="nav-handle"></div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;