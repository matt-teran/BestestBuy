import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';

function AppRouter() {
  return (
    <Routes>
      <Route path="/:paramId" element={<App />} />
      <Route path="*" element={<Navigate replace to="/66659" />} />
    </Routes>
  );
}

export default AppRouter;
