import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';  // Import act from react-dom/test-utils
import BookingForm from './BookingForm';
import '@testing-library/jest-dom';

test('HTML5 validation is applied to form fields', () => {
  render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} />);

  const nameInput = screen.getByLabelText(/Guest's name/i);
  expect(nameInput).toHaveAttribute('required');

  const dateInput = screen.getByLabelText(/Choose a date/i);  // Fixed query
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');

  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute('required');

  const guestsSelect = screen.getByLabelText(/Number of guests/i);
  expect(guestsSelect).toHaveAttribute('min', '1');
  expect(guestsSelect).toHaveAttribute('max', '10');

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).not.toHaveAttribute('required');
});

test('Validates form with Yup schema for valid and invalid input', async () => {
  const mockSubmit = jest.fn();
  const availableTimes = ['17:00', '18:00', '19:00'];

  render(
    <BookingForm
      availableTimes={availableTimes}
      submitForm={mockSubmit}
      dispatch={jest.fn()}
    />
  );

  const submitButton = screen.getByText(/Make Your Reservation/i);
  expect(submitButton).toBeDisabled();

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Guest's name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Choose a date/i), { target: { value: '2024-12-15' } });  // Fixed query
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
  });

  expect(submitButton).not.toBeDisabled();

  await act(async () => {
    fireEvent.click(submitButton);
  });

  await waitFor(() => expect(mockSubmit).toHaveBeenCalledTimes(1));

  // Test invalid input scenarios...
});
