import { Outlet, Link } from "react-router-dom";
import './Nav.scss'
import Hamburger from '../assets/hamburger-01.svg'
import CloseIcon from '../assets/close-icon-01.svg'
import { useState } from 'react';

function Nav() {

  const [mobileDisplay, setMobileDisplay] = useState('none');

  const toggleMobileMenu = () => {
    if (mobileDisplay === 'none') {
      setMobileDisplay('block');
    } else {
      setMobileDisplay('none');
    }
  }

  return (
    <>
      <nav>
        {/* Mobile */}
        <img alt="logo" className="mobile-icon" onClick={toggleMobileMenu} src={mobileDisplay === 'none' ? Hamburger : CloseIcon} />
        <div className="mobile-overlay" style={{ display: mobileDisplay }}>
          <ul className="mobile-nav-link-wrapper">
            <li className="mobile-nav-link">
              <Link onClick={toggleMobileMenu} to="/">Home</Link>
            </li>
            <li className="mobile-nav-link">
              <Link onClick={toggleMobileMenu} to="/projects">Projects</Link>
            </li>
            <li className="mobile-nav-link">
              <Link onClick={toggleMobileMenu} to="/about">About</Link>
            </li>
            <div className="nav-handle"></div>
          </ul>
        </div>
        {/* Desktop */}
        <ul className="nav-link-wrapper">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/projects">Projects</Link>
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