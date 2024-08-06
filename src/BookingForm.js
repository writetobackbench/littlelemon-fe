import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = ({ date, setDate, availableTimes, onBookingSubmit }) => {
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]); // Set default time to the first available time
    } else {
      setTime(''); // Reset time if no available times
    }
  }, [availableTimes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (time) {
      onBookingSubmit({ date, time, guests, occasion });
    } else {
      alert('Please select a time.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;