import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../timeReducer';
import '@testing-library/jest-dom';

describe('BookingForm Component', () => {
  test('Renders the BookingForm heading', () => {
    // Provide required props: availableTimes and dispatch (mock function)
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()} />);
    
    const headingElement = screen.getByText("Make Your reservation"); // Adjusted to match text in component
    expect(headingElement).toBeInTheDocument();
  });
});

describe('Time management functions', () => {
  test('initializeTimes returns the correct initial state', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ]);
  });

  test('updateTimes returns the same state when no update is required', () => {
    const state = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: "2024-02-20" }; // Action object format
    const newState = updateTimes(state, action);
    
    // Verify the state remains unchanged as per your reducer's logic
    expect(newState).toEqual(state);
  });
});

// describe('BookingForm Component', () => {
//   const mockDispatch = jest.fn();
//   const availableTimes = ['17:00', '18:00', '19:00', '20:00'];

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders available times from props', () => {
//     render(
//       <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
//     );

//     // Check if each available time is rendered in the select dropdown
//     availableTimes.forEach((time) => {
//       expect(screen.getByText(time)).toBeInTheDocument();
//     });
//   });

//   test('calls dispatch with correct action on date change', () => {
//     render(
//       <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
//     );
//     const headingElement = screen.getByText("Book Now");
//     expect(headingElement).toBeInTheDocument();

//     // Find the date input and change its value
//     const dateInput = screen.getByText(/choose date/i);
//     fireEvent.change(dateInput, { target: { value: '2022-12-01' } });

//     // Verify if dispatch is called with the correct action and date
//     expect(mockDispatch).toHaveBeenCalledWith({
//       type: 'UPDATE_TIMES',
//       date: '2022-12-01',
//     });
//   });

//   test('logs reservation details on form submission', () => {
//     // Mock console.log to capture form submission output
//     console.log = jest.fn();

//     render(
//       <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
//     );

//     // Fill out and submit the form
//     fireEvent.change(screen.getByLabelText(/choose date/i), {
//       target: { value: '2022-12-01' },
//     });
//     fireEvent.change(screen.getByLabelText(/choose time/i), {
//       target: { value: '18:00' },
//     });
//     fireEvent.change(screen.getByLabelText(/number of guests/i), {
//       target: { value: '3' },
//     });
//     fireEvent.change(screen.getByLabelText(/occasion/i), {
//       target: { value: 'Anniversary' },
//     });
//     fireEvent.click(
//       screen.getByRole('button', { name: /make your reservation/i })
//     );

//     // Verify that the reservation details were logged correctly
//     expect(console.log).toHaveBeenCalledWith('Reservation:', {
//       date: '2022-12-01',
//       time: '18:00',
//       guests: 3,
//       occasion: 'Anniversary',
//     });
//   });
// });
