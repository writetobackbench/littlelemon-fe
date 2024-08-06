// src/utils/api.js
export const fetchAPI = async (date) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const times = {
          '2024-08-06': ['12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'],
          '2024-08-07': ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'],
          '2024-08-08': ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM']
        };
        resolve(times[date] || []);
      }, 1000);
    });
  };
  
  export const submitAPI = async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };