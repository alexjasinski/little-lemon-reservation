import logo from './assets/logo.png';
import './App.css';
// import './components/About';
// import './components/Footer';
// import './components/Hero';
// import './components/Highlights';
// import './components/Nav';
// import './components/Testimonials'

function App() {
  return (
    <>
      <Nav>
        <nav>
          <img>{logo}</img>
          <ul>
            <li href="/home">Home</li>
            <li href="/about">About</li>
            <li href="/menu">Menu</li>
            <li href="/reservation">Reservation</li>
            <li href="/order">Order online</li>
          </ul>
        </nav>
      </Nav>
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
