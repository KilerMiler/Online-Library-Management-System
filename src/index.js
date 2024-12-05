// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root using createRoot
const root = createRoot(document.getElementById('root')); // Note: createRoot is imported correctly

// Render the app directly using root.render
root.render(
  <App /> // No need to wrap in React.StrictMode in production
);
