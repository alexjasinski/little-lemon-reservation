import React from 'react';
import BookingForm from '../components/BookingForm';

function ReservationPage({availableTimes, dispatch, submitForm }) {
 

  return (
    <>
      <h1>Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} // Pass submitForm to BookingForm
      />
    </>
  );
}

export default ReservationPage;
