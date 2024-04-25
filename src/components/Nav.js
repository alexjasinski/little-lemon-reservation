import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-alt.png';
import logoMobile from '../assets/logo-default.png';
import basket from '../assets/basket.png';

const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const useNewLogo = windowWidth < 900;
  const logoSrc = useNewLogo ? logoMobile : logo;

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
    {useNewLogo && (
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
          <div id="logo-header">
            <img
              src={logo}
              alt="logo"
              id={useNewLogo ? 'logo-header-mobile' : 'logo-header'}
            />
          </div>
          <ul id="header-list">
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
    </header>
    </>
  );
};

export default Nav;
