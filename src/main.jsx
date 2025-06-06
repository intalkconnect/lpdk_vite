import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Status from './pages/StatusSection';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
