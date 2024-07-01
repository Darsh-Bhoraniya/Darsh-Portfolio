// Import necessary modules from React and ReactDOM
import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.css';
import App from './App'; // Ensure App component is imported correctly
import reportWebVitals from './reportWebVitals';

// Use createRoot to render the application
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
