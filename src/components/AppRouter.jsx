import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Header from './header/Header';

function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:paramId" element={<App />} />
        <Route path="*" element={<Navigate replace to="/66642" />} />
      </Routes>
    </>
  );
}

export default AppRouter;
