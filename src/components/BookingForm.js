import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name is too short').required('Required'),
    date: Yup.date()
      .min(new Date(), 'Date cannot be in the past')
      .required('Please choose a valid date'),
    time: Yup.string().required('Please choose a time between 17:00 and 22:00'),
    guests: Yup.number()
      .min(1, 'At least 1 guest')
      .max(10, 'Maximum of 10 guests')
      .required('Required'),
    occasion: Yup.string().notRequired(),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        date: '',
        time: '',
        guests: 1,
        occasion: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        submitForm(values);
        dispatch(values);
      }}>
      {(formik) => (
        <Form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
          <label aria-label="Name of guest" htmlFor="name-guest">
            Guest's name
          </label>
          <Field
            type="text"
            id="name-guest"
            name="name"
            placeholder="Type in your name"
          />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          <label aria-label="Choose a date" htmlFor="res-date">
            Choose a date
          </label>
          <Field type="date" id="res-date" name="date" />
          <ErrorMessage name="date" component="div" style={{ color: 'red' }} />

          <label aria-label="Choose time" htmlFor="res-time">
            Choose time
          </label>
          <Field as="select" id="res-time" name="time">
            <option value="">--Please choose a time--</option>
            {availableTimes?.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" style={{ color: 'red' }} />
          <label aria-label="Number of guests" htmlFor="guests">
            Number of guests
          </label>
          <Field as="select" id="guests" name="guests" min="1" max="10">
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="guests"
            component="div"
            style={{ color: 'red' }}
          />
          <label aria-label="Occasion" htmlFor="occasion">
            Occasion
          </label>
          <Field as="select" id="occasion" name="occasion">
            <option value="">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <ErrorMessage
            name="occasion"
            component="div"
            style={{ color: 'red' }}
          />
          <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
            Make Your reservation
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default BookingForm;
