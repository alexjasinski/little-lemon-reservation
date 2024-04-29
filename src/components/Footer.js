import React from 'react';
import logo from '../assets/logo-default-white.png';
import placeholder from '../assets/placeholder.png';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import gplus from '../assets/gplus.png';
import linkedin from '../assets/in.png';

const Footer = () => {
  return (
    <div id="footer-background">
      <div id="footer-container">
        <div id="footer">
          <div id="footer-logo-contact">
            <img src={logo} alt="logo_footer" id="logo-footer" />
            <p>220 N Green St, Chicago, IL 60607</p>
            <p id="footer-contact-info">(312) 555-5555</p>
            <p>contact@lil-lemon.co</p>
          </div>
          <nav className="footer-nav">
            <ul>
              <li>
                <a className="footer-link" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="footer-link" href="/home">
                  Contact us
                </a>
              </li>
              <li>
                <a className="footer-link" href="/menu">
                  Careers
                </a>
              </li>
              <li>
                <a className="footer-link" href="/reservation">
                  Sitemap
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav2">
            <ul>
              <li>
                <a className="footer-link" href="/about">
                  My account
                </a>
              </li>
              <li>
                <a className="footer-link" href="/home">
                  Account details
                </a>
              </li>
              <li>
                <a className="footer-link" href="/menu">
                  Purchases
                </a>
              </li>
              <li>
                <a className="footer-link" href="/reservation">
                  Reset password
                </a>
              </li>
            </ul>
          </nav>
            <div id="placeholder-container" >
            <img id="placeholder" src={placeholder} alt="placeholder"  />
            </div>
        </div>
        <div id="footer-bottom">
          <div id="footer-social-container">
            <img src={fb} className="footer-social" id="social-fb" />
            <img src={ig} className="footer-social" id="social-ig" />
            <img src={gplus} className="footer-social" id="social-gplus" />
            <img src={linkedin} className="footer-social" id="social-linkedin" />
          </div>
            <p id="footer-copyright">
              &copy; 2024 Lil' Lemon LLC. All rights reserved.
            </p>
          <div id="footer-legal">
            <p id="terms">Terms of use</p>
            <p id="privacy">Privacy policy</p>
            <p id="cookie">Cookie policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
