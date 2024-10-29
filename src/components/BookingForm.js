import React, { useState } from 'react';
function BookingForm({ availableTimes = [], dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');


  
  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here API option
    console.log('Reservation:', { date, time, guests, occasion });
  };

  return (
    <>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={handleSubmit}>
        <label aria-label="Choose date" htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label aria-label="Choose time" htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label aria-label="Number of guests" htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />

        <label aria-label="Occasion" htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
