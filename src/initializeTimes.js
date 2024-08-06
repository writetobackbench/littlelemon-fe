import { initializeTimes } from './utils/api'; // Adjust path if api.js is in the src folder

// src/api.js
export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const times = await window.fetchAPI(today);
  return times;
};