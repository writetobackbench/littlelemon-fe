import { render,fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockOnBookingSubmit = jest.fn();
const mockSetDate = jest.fn();

describe('BookingForm', () => {
  // Render the component with some default values for testing
  const defaultProps = {
    date: '2024-08-07',
    setDate: mockSetDate,
    availableTimes: ['10:00 AM', '11:00 AM', '12:00 PM'],
    onBookingSubmit: mockOnBookingSubmit,
  };

  test('Date input field has correct attributes', () => {
    render(<BookingForm {...defaultProps} />);
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveAttribute('value', '2024-08-07');
    expect(dateInput).toBeRequired();
  });

  test('Time select field has correct attributes', () => {
    render(<BookingForm {...defaultProps} />);
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute('id', 'time');
    expect(timeSelect).toBeRequired();
  });

  test('Guests input field has correct attributes', () => {
    render(<BookingForm {...defaultProps} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('placeholder', '1');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();
  });

  test('Occasion select field has correct attributes', () => {
    render(<BookingForm {...defaultProps} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionSelect).toBeRequired();
  });
test('Valid state: form submission with correct inputs', () => {
    render(<BookingForm {...defaultProps} />);

    // Set date
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-08-07' } });

    // Set time
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '10:00 AM' } });

    // Set guests
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });

    // Set occasion
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Check if form submission handler was called
    expect(mockOnBookingSubmit).toHaveBeenCalledWith({
      date: '2024-08-07',
      time: '10:00 AM',
      guests: '2',
      occasion: 'Birthday',
    });
    expect(mockOnBookingSubmit).toHaveBeenCalledTimes(1);
  });

  test('Invalid state: empty date field', () => {
    render(<BookingForm {...defaultProps} />);

    // No date input
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '' } });
    
    // Set time
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '10:00 AM' } });

    // Set guests
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });

    // Set occasion
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Check if form submission handler was not called
    expect(mockOnBookingSubmit).not.toHaveBeenCalled();

    // Check for validation error message
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  });

  test('Invalid state: empty time field', () => {
    render(<BookingForm {...defaultProps} />);

    // Set date
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-08-07' } });

    // No time input
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '' } });

    // Set guests
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });

    // Set occasion
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Check if form submission handler was not called
    expect(mockOnBookingSubmit).not.toHaveBeenCalled();

    // Check for validation error message
    expect(screen.getByText(/time selection is required/i)).toBeInTheDocument();
  });

  test('Invalid state: guests outside valid range', () => {
    render(<BookingForm {...defaultProps} />);

    // Set date
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-08-07' } });

    // Set time
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '10:00 AM' } });

    // Set invalid guests number
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '11' } });

    // Set occasion
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Check if form submission handler was not called
    expect(mockOnBookingSubmit).not.toHaveBeenCalled();

    // Check for validation error message
    expect(screen.getByText(/number of guests must be between 1 and 10/i)).toBeInTheDocument();
  });

  test('Invalid state: empty occasion field', () => {
    render(<BookingForm {...defaultProps} />);

    // Set date
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-08-07' } });

    // Set time
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '10:00 AM' } });

    // Set guests
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });

    // No occasion input
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: '' } });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Check if form submission handler was not called
    expect(mockOnBookingSubmit).not.toHaveBeenCalled();

    // Check for validation error message
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });
});