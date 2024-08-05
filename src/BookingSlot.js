import React from 'react';

const BookingSlot = ({ time, isBooked }) => {
  return (
    <div className={`booking-slot ${isBooked ? 'booked' : ''}`}>
      {time}
    </div>
  );
};

export default BookingSlot;