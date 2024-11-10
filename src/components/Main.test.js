import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

test('renders Main component', () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  // Check if the ReservationPage is rendered
  expect(screen.getByLabelText(/Guest information/i)).toBeInTheDocument();
});
