// src/components/Main.js
import { fetchAPI, submitAPI } from '../api/api';
import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ReservationPage from '../pages/ReservationPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import { saveReservations } from '../utils/LocalStorage';

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
    console.log('Submitting form data:', formData); // Logging form data for debugging
    if (submitAPI(formData)) {
      saveReservations(formData); // Save formData to localStorage if needed
      navigate('/confirmed-booking', { state: formData });
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
      <Route path="confirmed-booking" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default Main;

// Note: when using useState in Main.js, that state (e.g., bookings) is local to Main.js and isn’t directly accessible in ConfirmedBooking. So, when we try to read bookings in ConfirmedBooking, it doesn’t have access to Main.js’s internal state unless passed down explicitly as a prop or shared via context.  When navigate('/confirmed-booking') is called, the page "navigates," but there’s no guarantee that the bookings state will update before ConfirmedBooking renders. React doesn’t guarantee that bookings will be synchronized across the components instantly due to React’s asynchronous nature. Solution: useLocation is a hook that allows the component to access the location object, including any state that was passed. When ConfirmedBooking renders, it can immediately retrieve the latest booking information from location.state without needing to depend on component state in Main.js. This approach keeps the data passing local to the navigation action rather than depending on the component tree or other global solutions (e.g., context).Route state is passed SYNCHRONOUSLY with the navigation action, ensuring that ConfirmedBooking has access to the data as soon as it renders.
