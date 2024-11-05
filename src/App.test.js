import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders the Hero component on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    // Check if Hero is present
    expect(screen.getByText(/Hero/i)).toBeInTheDocument();
  });

  test('navigates to the About page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    // Check if About is present
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  const renderWithRouter = (route) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
  };
  
  test('displays error message for an unknown route', () => {
    renderWithRouter('/unknown');
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

    // Check if the error message is displayed
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
  test('displays submitted message when form is submitted', () => {
    render(<App />);

    // Simulate entering text and submitting
    fireEvent.change(screen.getByPlaceholderText('Enter text'), {
      target: { value: 'Hello World' },
    });
    fireEvent.click(screen.getByText('Submit'));

    // Check if the message is displayed
    expect(screen.getByText('Submitted: Hello World')).toBeInTheDocument();
  });