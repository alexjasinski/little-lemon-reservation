import { fetchAPI, submitAPI } from '../api/api';
import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ReservationPage from '../pages/ReservationPage';
import ConfirmedBooking from './ConfirmedBooking';

export const DEFAULT_TIMES = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date);
    default:
      return state;
  }
};

export const initializeTimes = () => fetchAPI(new Date());

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed-booking');
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReservationPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm} // pass submitForm to ReservationPage
          />
        }
      />
      <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default Main;
