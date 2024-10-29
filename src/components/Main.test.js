import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './Main';

describe('Main Component', () => {
  test('renders BookingForm with initial available times', () => {
    render(<Main />);

    // Verify that the "Available Times" label is in the document
    expect(screen.getByText('Available Times:')).toBeInTheDocument();

    // Check each initial available time is rendered
    ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
    const availableTime = screen.getByText(/17:00/i);
    expect(availableTime).toBeInTheDocument();
  });

  test('dispatch updates available times on date change', () => {
    render(<Main />);

    // Find the date input and simulate a date change
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2022-12-01' } });

    // Verify if the dispatch action was triggered to update available times
    ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
        // Check if dispatch is passed down as a prop (mocked here by an action type check)
    // Adjust if dispatch is used directly in BookingForm for clicking or submitting
    expect(screen.getByTestId('booking-form')).toHaveProperty('dispatch');
  });
});
