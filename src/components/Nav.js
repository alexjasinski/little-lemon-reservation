import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-alt.png';
import basket from '../assets/basket.png';

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

        <nav className="nav">
    {useLogo && (
            <>
              <input type="checkbox" id="menu-toggle" />
              <label id="trigger" htmlFor="menu-toggle"></label>
              <label id="burger" htmlFor="menu-toggle"></label>
              <ul id="menu">
                <li className="header-item"><a href="#">Home</a></li>
                <li className="header-item"><a href="#">About</a></li>
                <li className="header-item"><a href="#">Menu</a></li>
                <li className="header-item"><a href="#">Reservation</a></li>
                <li className="header-item"><a href="#">Order</a></li>
                <li className="header-item"><a href="#">Basket</a></li>
              </ul>
            </>
          )}
          <ul id="header-list">
            <img id="logo-header"
              src={logo}
              alt="logo"
            />
            <li className="header-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="header-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="header-item">
              <a className="nav-link" href="/menu">
                Menu
              </a>
            </li>
            <li className="header-item">
              <a className="nav-link" href="/reservation">
                Reservation
              </a>
            </li>
            <li className="header-item">
              <a className="nav-link" href="/order">
                Order
              </a>
            </li>
          <img className="header-item" src={basket} alt="basket" id="icon-basket" />
          </ul>
        </nav>
          <img id="logo-header2"
            src={logo}
            alt="logo"
          />
    </header>
    </>
  );
};

export default Nav;
