import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import AuthRoute from './components/AuthRoute/AuthRoute';
import ProfilePage from './pages/Profile/ProfilePage';
import SGPAPage from './pages/SGPA/SGPAPage';
import CGPAPage from './pages/CGPA/CGPAPage';
import SGPACalcPage from './pages/SGPACalc/SGPACalcPage';

import AdminRoute from './components/AdminRoute/AdminRoute';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sgpa/" element={<SGPAPage />} />
      <Route path="/cgpa/" element={<CGPAPage />} />
      <Route path="/sgpa/scheme/:scheme/sem/:sem" element={<SGPACalcPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
        }
      />

    </Routes>
  );
}
