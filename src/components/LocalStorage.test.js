import { saveReservations, getReservations } from '../utils/LocalStorage';

describe('LocalStorage Utils', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  const mockReservation = {
    id: 1,
    name: 'John Doe',
    date: '2024-01-01',
    time: '19:00'
  };

  test('should save a reservation to localStorage', () => {
    saveReservations(mockReservation);
    const savedReservations = JSON.parse(localStorage.getItem('reservations'));
    
    expect(savedReservations).toHaveLength(1);
    expect(savedReservations[0]).toEqual(mockReservation);
  });

  test('should append new reservations to existing ones', () => {
    const secondReservation = {
      id: 2,
      name: 'Jane Doe',
      date: '2024-01-02',
      time: '20:00'
    };

    saveReservations(mockReservation);
    saveReservations(secondReservation);

    const savedReservations = JSON.parse(localStorage.getItem('reservations'));
    
    expect(savedReservations).toHaveLength(2);
    expect(savedReservations[0]).toEqual(mockReservation);
    expect(savedReservations[1]).toEqual(secondReservation);
  });

  test('should return empty array when no reservations exist', () => {
    const reservations = getReservations();
    expect(reservations).toEqual([]);
  });

  test('should retrieve saved reservations', () => {
    saveReservations(mockReservation);
    const retrievedReservations = getReservations();
    
    expect(retrievedReservations).toHaveLength(1);
    expect(retrievedReservations[0]).toEqual(mockReservation);
  });
});