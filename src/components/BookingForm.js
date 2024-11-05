import React, { useState } from 'react';
function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData({ ...formData, date: selectedDate });
    dispatch({ type: 'UPDATE_TIMES', date: new Date(selectedDate) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={handleSubmit}>

<label aria-label="Name of guest" htmlFor="name-guest">
          Guest's name
        </label>
        <input
          type="text"
          id="name-guest"
          name="name"
          placeholder="Type in your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label aria-label="Choose date" htmlFor="res-date">
          Choose a date
        </label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          required
        />

        <label aria-label="Choose time" htmlFor="res-time">
          Choose time
        </label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required>
          <option value="">--Please choose a time--</option>
          {availableTimes?.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label aria-label="Number of guests" htmlFor="guests">
          Number of guests
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label aria-label="Occasion" htmlFor="occasion">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required>
          <option value="">--Please choose an occasion--</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
