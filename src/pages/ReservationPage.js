import React from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import './ReservationPage.css';

function ReservationPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div id="reservation">
      <h1>Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} // Pass submitForm to BookingForm
      />
    </div>
  );
}

export default ReservationPage;
