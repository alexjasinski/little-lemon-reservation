import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import '@testing-library/jest-dom';

// Mocked API data to keep test output consistent
jest.mock('../api/api', () => ({
  fetchAPI: jest.fn(() => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]),
}));

describe('BookingForm Component', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  test('Renders the form title', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    // Check for the title text, ensuring the form is rendered
    const headingElement = screen.getByText('Make Your reservation');
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders available times in the time dropdown', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    // Verify each available time option is rendered in the dropdown
    availableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('Calls dispatch with the correct action on date change', () => {
    const mockDispatch = jest.fn();
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={jest.fn()}
      />
    );

    // Target the date input by aria-label
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.input(dateInput, { target: { value: '2024-02-20' } });

    // Verify dispatch is called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      date: new Date('2024-02-20'),
    });
  });

  test('Calls submitForm with formData on form submission', () => {
    const mockSubmitForm = jest.fn();
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={jest.fn()}
        submitForm={mockSubmitForm}
      />
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText("Guest's name"), {
      target: { value: 'John Doe' },
    });
    fireEvent.input(screen.getByLabelText('Choose date'), {
      target: { value: '2024-02-20' },
    });
    fireEvent.change(screen.getByLabelText('Choose time'), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByLabelText('Occasion'), {
      target: { value: 'Birthday' },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole('form'));

    // Verify submitForm was called with correct data
    expect(mockSubmitForm).toHaveBeenCalledWith({
      name: 'John Doe',
      date: '2024-02-20',
      time: '17:00',
      guests: 4,
      occasion: 'Birthday',
    });
  });
});
