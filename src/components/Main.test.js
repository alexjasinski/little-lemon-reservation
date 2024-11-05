// Main.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './Main';
import { initializeTimes, updateTimes } from './Main';
import { BrowserRouter } from 'react-router-dom';

// Mock fetchAPI to control its return value for tests
jest.mock('../api/api', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}));

describe('Main Component', () => {
  test('renders BookingForm with initial available times', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    // Check that the initial available times from mocked fetchAPI are rendered
    ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].forEach((time) => {
      const option = screen.getByRole('option', { name: time });
      expect(option).toBeInTheDocument();
    });
  });

  test('dispatch updates available times on date change', () => {
    render(
      <BrowserRouter>
      <Main />
      </BrowserRouter>
      );
  
    // Find the date input and simulate a date change
    const dateInput = screen.getByRole('textbox', { name: /choose date/i });
    fireEvent.change(dateInput, { target: { value: '2022-12-01' } });

    // After date change, ensure fetchAPI times are displayed (mocked response)
    ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].forEach((time) => {
      const option = screen.getByRole('option', { name: time });
      expect(option).toBeInTheDocument();
    });
  });
});

describe('Time management functions', () => {
  test('initializeTimes returns fetched times from API', () => {
    const initialTimes = initializeTimes();
    expect(Array.isArray(initialTimes)).toBe(true);
    expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });

  test('updateTimes returns updated times for selected date', () => {
    const currentState = ["17:00", "18:00"];
    const selectedDate = new Date("2024-02-20");
    const action = { 
      type: 'UPDATE_TIMES', 
      date: selectedDate 
    };

    const newState = updateTimes(currentState, action);
    expect(Array.isArray(newState)).toBe(true);
    expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

// Note: fetchAPI import statement is not needed because the mock will apply globally due to jest.mock.