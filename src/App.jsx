import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UseStorage } from './UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <UseStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login/*" element={<Login />}></Route>
        </Routes>
        <Footer />
      </UseStorage>
    </BrowserRouter>
  );
};

export default App;
