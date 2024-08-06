// src/utils/loadScript.js

export const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve(window.fetchAPI); // Resolve with the global function
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };