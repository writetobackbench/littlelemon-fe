import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = ({ date, setDate, availableTimes, onBookingSubmit }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Validation state
  const [isDateValid, setIsDateValid] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [isGuestsValid, setIsGuestsValid] = useState(true);
  const [isOccasionValid, setIsOccasionValid] = useState(true);

  useEffect(() => {
    if (availableTimes.length > 0) {
      setSelectedTime(availableTimes[0]); // Set default time to the first available time
    } else {
      setSelectedTime(''); // Reset time if no available times
    }
  }, [availableTimes]);

  // Validation functions
  const validateDate = (value) => {
    setIsDateValid(!!value);
  };

  const validateTime = (value) => {
    setIsTimeValid(!!value);
  };

  const validateGuests = (value) => {
    const number = parseInt(value, 10);
    setIsGuestsValid(number >= 1 && number <= 10);
  };

  const validateOccasion = (value) => {
    setIsOccasionValid(!!value);
  };

  const isFormValid = () => {
    return isDateValid && isTimeValid && isGuestsValid && isOccasionValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date,
      time: selectedTime,
      guests,
      occasion,
    };
    if (isFormValid()) {
      onBookingSubmit(formData); // Call the passed function if form is valid
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="bookingFormTitle">
      <h2 id="bookingFormTitle">Make Your Reservation</h2>
      
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => {
            const value = e.target.value;
            setDate(value);
            validateDate(value);
          }}
          aria-invalid={!isDateValid}
          required
        />
        {!isDateValid && <span role="alert" className="error">Date is required.</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedTime(value);
            validateTime(value);
          }}
          aria-invalid={!isTimeValid}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        {!isTimeValid && <span role="alert" className="error">Time selection is required.</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => {
            const value = e.target.value;
            setGuests(value);
            validateGuests(value);
          }}
          aria-invalid={!isGuestsValid}
          required
        />
        {!isGuestsValid && <span role="alert" className="error">Number of guests must be between 1 and 10.</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => {
            const value = e.target.value;
            setOccasion(value);
            validateOccasion(value);
          }}
          aria-invalid={!isOccasionValid}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {!isOccasionValid && <span role="alert" className="error">Occasion is required.</span>}
      </div>

      <button type="submit" disabled={!isFormValid()} aria-disabled={!isFormValid()}>
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;