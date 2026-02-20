import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          <span className="navbar__logo-icon">🎓</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">GEC Munger</span>
            <span className="navbar__logo-sub">College Portal</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/departments"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Departments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Facilities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payment"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Payment
            </NavLink>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <NavLink to="/" end onClick={() => setMenuOpen(false)} className="navbar__mobile-link">Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="navbar__mobile-link">About</NavLink>
          <NavLink to="/departments" onClick={() => setMenuOpen(false)} className="navbar__mobile-link">Departments</NavLink>
          <NavLink to="/facilities" onClick={() => setMenuOpen(false)} className="navbar__mobile-link">Facilities</NavLink>
          <NavLink to="/payment" onClick={() => setMenuOpen(false)} className="navbar__mobile-link">Payment</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
