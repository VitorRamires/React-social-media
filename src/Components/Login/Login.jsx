import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LostPassword from './LostPassword';
import LoginCreateAccount from './LoginCreateAccount';
import ResetPassword from './ResetPassword';

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create-account" element={<LoginCreateAccount />} />
        <Route path="lost-password" element={<LostPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default Login;
