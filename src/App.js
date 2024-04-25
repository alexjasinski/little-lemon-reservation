import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="container">
      <Nav/>
      <main className="main">
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      <Footer/>
      </main>
    </div>
  );
}

export default App;
