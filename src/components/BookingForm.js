import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef();

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

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
        if (!captchaVerified) {
          alert('Please verify reCAPTCHA.');
          return;
        }
        submitForm(values);
        dispatch(values);
      }}>
      {(formik) => (
        <Form role="form" aria-label="booking-form" className="form-container">
          <fieldset aria-label="Guest information" className="fieldset">
            <legend className="legend">Guest information</legend>
            <div className="form-group">
              <label
                aria-label="Name of guest"
                htmlFor="name-guest"
                className="booking-label">
                Guest's name:
              </label>
              <Field
                type="text"
                id="name-guest"
                name="name"
                placeholder="Type in your name"
                className="booking-input"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
                style={{ color: 'red' }}
              />
              <label
                aria-label="Choose a date"
                htmlFor="res-date"
                className="booking-label">
                Choose a date:
              </label>
              <Field
                type="date"
                id="res-date"
                name="date"
                className="booking-input"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="error-message"
                style={{ color: 'red' }}
              />

              <label
                aria-label="Choose time"
                htmlFor="res-time"
                className="booking-label">
                Choose time:
              </label>
              <Field
                as="select"
                id="res-time"
                name="time"
                className="booking-input">
                <option value="" className="booking-dropdown">
                  Please choose a time
                </option>
                {availableTimes?.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="time"
                component="div"
                className="error-message"
                style={{ color: 'red' }}
              />
              <label
                aria-label="Number of guests"
                htmlFor="guests"
                className="booking-label">
                Number of guests:
              </label>
              <Field
                as="select"
                id="guests"
                name="guests"
                min="1"
                max="10"
                className="booking-input">
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="guests"
                component="div"
                className="error-message"
                style={{ color: 'red' }}
              />
              <label
                aria-label="Occasion"
                htmlFor="occasion"
                className="booking-label">
                Occasion:
              </label>
              <Field
                as="select"
                id="occasion"
                name="occasion"
                className="booking-input">
                <option value="">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <ErrorMessage
                name="occasion"
                component="div"
                className="error-message"
                style={{ color: 'red' }}
              />
            </div>
          </fieldset>
          <fieldset
            id="captcha-fieldset"
            aria-label="Captcha"
            className="fieldset">
            <ReCAPTCHA
              aria-label="reCaptcha"
              className="recaptcha"
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </fieldset>
          <fieldset aria-label="Submit reservation" className="fieldset">
          <button
            aria-label="Submit reservation"
            type="submit"
            className="submit-button"
            disabled={!(formik.isValid && formik.dirty && captchaVerified)}>
            Reserve a table
          </button>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
}

export default BookingForm;
