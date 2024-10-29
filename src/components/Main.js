import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Main;
