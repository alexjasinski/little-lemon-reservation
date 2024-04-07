import React from 'react';
import logo from '../assets/logo.png';


const Nav = () => {
return (
	<>
	<nav>
	<img src={logo} alt="logo" />
	<ul>
	  <li><a href="/home">Home</a></li>
	  <li><a href="/about">About</a></li>
	  <li><a href="/menu">Menu</a></li>
	  <li><a href="/reservation">Reservation</a></li>
	  <li><a href="/order">Order</a></li>
	</ul>
  </nav>
  </>
)
}

export default Nav;