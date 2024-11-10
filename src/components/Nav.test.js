import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders navigation links', () => {
  render(
    <Router>
      <Nav />
    </Router>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Reservation/i)).toBeInTheDocument();
});
