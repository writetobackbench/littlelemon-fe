const fetchAPI = async (date) => {
    // Mocking an API call
    const availableTimes = {
      "2023-01-01": ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
      "2024-08-07": ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"],
      // Add more dates and times as needed
    };
    return availableTimes[date] || [];
  };
  
  export default fetchAPI;