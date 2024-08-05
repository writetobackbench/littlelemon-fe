import './BookingPage.css';
import BookingForm from './BookingForm.js';
import React, { useState } from 'react';
import BookingList from './BookingList.js';

const BookingPage = () => {
  const [slots, setSlots] = useState([
    { time: '17:00', isBooked: false },
    { time: '18:00', isBooked: false },
    { time: '19:00', isBooked: false },
    { time: '20:00', isBooked: false },
    { time: '21:00', isBooked: false },
    { time: '22:00', isBooked: false },
  ]);

  const handleBookingSubmit = (bookingData) => {
    const updatedSlots = slots.map(slot =>
      slot.time === bookingData.time ? { ...slot, isBooked: true } : slot
    );
    setSlots(updatedSlots);
  };

  return (
    <>
    <div>
      <h1 className='bookingpage'>Booking Page</h1>
      <BookingForm
        availableTimes={slots.filter(slot => !slot.isBooked).map(slot => slot.time)}
        onBookingSubmit={handleBookingSubmit}
      />
      </div>
      <div>
      
      <BookingList slots={slots} />
      </div>
      </>
  );
};

export default BookingPage;