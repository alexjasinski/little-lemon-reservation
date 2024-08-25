import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationPage from './components/ReservationPage';

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
            <Route path="/reservation" element={<ReservationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
