import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './utils/api';

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (date) {
      const dateObj = new Date(date); 
            if (fetchAPI) {
        const fetchAvailableTimes = async () => {
          const times = await fetchAPI(dateObj);
          console.log('Fetched available times:', times);
          setAvailableTimes(times);
        };
        fetchAvailableTimes();
      }
    }
  }, [date]);

  const submitForm = async (formData) => {
    try {
      const result = await submitAPI(formData);
      if (result) {
        navigate('/confirmed-booking'); 
      } else {
        
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleBookingSubmit = (formData) => {
    submitForm(formData);
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