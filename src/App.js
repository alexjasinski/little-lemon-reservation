import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import RestaurantsPage from './pages/RestaurantsPage';
import BasketPage from './pages/BasketPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Main from './components/Main';
function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section aria-label="Hero Section">
                    <Hero />
                  </section>
                  <section aria-label="Highlights Section">
                    <Highlights />
                  </section>
                  <section aria-label="Testimonials Section">
                    <Testimonials />
                  </section>
                  <section aria-label="About Section">
                    <About />
                  </section>
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservation/*" element={<Main />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
