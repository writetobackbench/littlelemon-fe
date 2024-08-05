import React from 'react';
import BookingSlot from './BookingSlot';

const BookingList = ({ slots }) => {
  return (
    <div className="booking-list">
        <h2>Available slots</h2>
      {slots.map((slot) => (
        <BookingSlot
          key={slot.time}
          time={slot.time}
          isBooked={slot.isBooked}
        />
      ))}
    </div>
  );
};

export default BookingList;