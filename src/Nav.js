import { Outlet, Link } from "react-router-dom";

function Nav () {
    return (
        <>
          <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
    };

export default Nav;