// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ReactModal from 'react-modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactModal.setAppElement('#root');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
