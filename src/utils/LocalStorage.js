const RESERVATION_STORAGE_KEY = 'reservations';

export const saveReservations = (reservation) => {
  const currentReservations =
    JSON.parse(localStorage.getItem(RESERVATION_STORAGE_KEY)) || [];
  currentReservations.push(reservation);
  localStorage.setItem(
    RESERVATION_STORAGE_KEY,
    JSON.stringify(currentReservations)
  );
};

export const getReservations = () => {
  return JSON.parse(localStorage.getItem(RESERVATION_STORAGE_KEY)) || [];
};
