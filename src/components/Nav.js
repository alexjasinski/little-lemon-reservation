import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-alt.png';
import basket from '../assets/basket.png';
import basketburger from '../assets/basket-burger.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const useLogo = windowWidth < 900;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header id="header-no-background" className="section-no-background">
        <nav className="nav" aria-label="Main Navigation">
          {useLogo && (
            <>
              <input type="checkbox" id="menu-toggle" />
              <label id="trigger" htmlFor="menu-toggle"></label>
              <label id="burger" htmlFor="menu-toggle"></label>
              <ul id="menu">
                <li className="header-item">
                  <Link aria-label="Homepage" to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="header-item">
                  <Link aria-label="About" to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="header-item">
                  <Link aria-label="Menu" to="/menu" className="nav-link">
                    Menu
                  </Link>
                </li>
                <li className="header-item">
                  <Link
                    aria-label="Reservation"
                    to="/reservation"
                    className="nav-link">
                    Reservation
                  </Link>
                </li>
                <li className="header-item">
                  <Link
                    aria-label="Restaurants"
                    to="/restaurants"
                    className="nav-link">
                    Restaurants
                  </Link>
                </li>
                <li className="header-item">
                  <Link aria-label="Basket" to="/basket" className="nav-link">
                    <img
                      src={basketburger}
                      alt="basket"
                      id="icon-basket-burger"
                    />
                  </Link>
                </li>
              </ul>
            </>
          )}
          <ul id="header-list">
            <img id="logo-header" src={logo} alt="logo" />
            <li className="header-item">
              <Link aria-label="Home" to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="header-item">
              <Link aria-label="About" to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="header-item">
              <Link aria-label="Menu" to="/menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="header-item">
              <Link
                aria-label="Reservation"
                to="/reservation"
                className="nav-link">
                Reservation
              </Link>
            </li>
            <li className="header-item">
              <Link
                aria-label="Restaurants"
                to="/restaurants"
                className="nav-link">
                Restaurants
              </Link>
            </li>
            <li className="header-item">
              <Link aria-label="Basket" to="/basket" className="nav-link">
                <img
                  className="header-item"
                  src={basket}
                  alt="basket"
                  id="icon-basket"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <img id="logo-header2" src={logo} alt="logo" />
      </header>
    </>
  );
};

export default Nav;
