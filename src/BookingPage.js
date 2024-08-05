import React from 'react';
import './BookingPage.css';
import BookingForm from './BookingForm.js';

const BookingPage = () => {
  return (
    <div>
      <h1 className='bookingpage'>Booking Page</h1>
      <BookingForm/>
      {/* Add more content as needed */}
    </div>
  );
};
export default BookingPage;