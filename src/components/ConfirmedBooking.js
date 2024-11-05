// src/components/ConfirmedBooking.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const booking = location.state;

  return (
    <div className="confirmed-booking">
      {booking ? (
        <>
          <h1>Your booking has been confirmed!</h1>
          <div className="booking-details">
            <p>
              Thank you for choosing our restaurant. We look forward to serving
              you.
            </p>
            <p>Name: {booking.name}</p>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Guests: {booking.guests}</p>
            <p>Occasion: {booking.occasion}</p>
          </div>
        </>
      ) : (
        <p>No booking information available</p>
      )}
    </div>
  );
};

export default ConfirmedBooking;
