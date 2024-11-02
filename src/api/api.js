/**
 * An array of default available time slots for booking appointments.
 * These times are used as a fallback if the API call to fetch available times fails.
 */
export const fetchAPI = (date) => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  return availableTimes;
};

export const submitAPI = (formData) => {
  // Here API option
  return true; // Simulates successful API submission
};
