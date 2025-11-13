import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import GalleryPage from './pages/GalleryPage';
import ReservationPage from './pages/ReservationPage';

import './index.css';
import './i18n.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="page-transition">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
