import React from 'react';
import logo from '../assets/logo-default-white.png';
import placeholder from '../assets/placeholder.png';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import gplus from '../assets/gplus.png';
import linkedin from '../assets/in.png';

const Footer = () => {
  return (
    <div id="footer-background" role="contentinfo">
      <div id="footer-container">
        <div id="footer">
          <div aria-label="footer logo and contact info" id="footer-logo-contact">
            <img src={logo} alt="logo_footer" id="logo-footer" />
            <p>220 N Green St, Chicago, IL 60607</p>
            <p id="footer-contact-info">(312) 555-5555</p>
            <p>contact@lil-lemon.co</p>
          </div>
          <nav className="footer-nav">
            <ul>
              <li>
                <a aria-label="About" className="footer-link" href="/about">
                  About
                </a>
              </li>
              <li>
                <a aria-label="Contact us" className="footer-link" href="/home">
                  Contact us
                </a>
              </li>
              <li>
                <a aria-label="Careers" className="footer-link" href="/menu">
                  Careers
                </a>
              </li>
              <li>
                <a aria-label="Sitemap" className="footer-link" href="/reservation">
                  Sitemap
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav2">
            <ul>
              <li>
                <a aria-label="My account" className="footer-link" href="/about">
                  My account
                </a>
              </li>
              <li>
                <a aria-label="Account details" className="footer-link" href="/home">
                  Account details
                </a>
              </li>
              <li>
                <a aria-label="Purchases" className="footer-link" href="/menu">
                  Purchases
                </a>
              </li>
              <li>
                <a aria-label="Reset password" className="footer-link" href="/reservation">
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
          <div aria-label="social media links" id="footer-social-container">
            <img aria-label="facebook" src={fb} alt="" className="footer-social" id="social-fb" />
            <img aria-label="instagram" src={ig} alt="" className="footer-social" id="social-ig" />
            <img aria-label="google plus" src={gplus} alt="" className="footer-social" id="social-gplus" />
            <img aria-label="linkedin" src={linkedin} alt="" className="footer-social" id="social-linkedin" />
          </div>
            <p aria-label="Copyright" id="footer-copyright">
              &copy; 2024 Lil' Lemon LLC. All rights reserved.
            </p>
          <div aria-label="Legal information" id="footer-legal">
            <p aria-label="Terms of use" id="terms">Terms of use</p>
            <p aria-label="Privacy policy" id="privacy">Privacy policy</p>
            <p aria-label="Cookie policy" id="cookie">Cookie policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
