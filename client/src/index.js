import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Router from 'react-router-dom';
const { BrowserRouter } = Router;
// all pages across front end have been wrapped in BrowserRouter to enable routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
