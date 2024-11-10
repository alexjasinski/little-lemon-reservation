import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form', () => {
  const mockSubmitForm = jest.fn();
  const availableTimes = ['17:00', '18:00'];

  render(<BookingForm availableTimes={availableTimes} dispatch={() => {}} submitForm={mockSubmitForm} />);

  // Check for form elements
  expect(screen.getByLabelText(/Guest's name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose a date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();

  // Test form submission (mock)
  fireEvent.change(screen.getByLabelText(/Guest's name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
  fireEvent.click(screen.getByRole('button', { name: /Reserve a table/i }));

  expect(mockSubmitForm).toHaveBeenCalled();
});
