import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CardDetailed from './Components/CardDetailed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/:id' element={<CardDetailed />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);
