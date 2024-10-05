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
import ReservationPage from './pages/ReservationPage';
import RestaurantsPage from './pages/RestaurantsPage';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Highlights />
                  <Testimonials />
                  <About />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/basket" element={<BasketPage />} />          
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
