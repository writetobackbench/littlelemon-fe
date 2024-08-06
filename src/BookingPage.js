import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from './utils/api';

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (date) {
        const times = await fetchAPI(date);
        console.log('Fetched available times:', times); // Log fetched times
        setAvailableTimes(times);
      }
    };
    fetchAvailableTimes();
  }, [date]);

  const handleBookingSubmit = (formData) => {
    console.log('Booking data:', formData);
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        availableTimes={availableTimes}
        onBookingSubmit={handleBookingSubmit}
      />
    </div>
  );
};

export default BookingPage;