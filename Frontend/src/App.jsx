import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import QRCodePage from './pages/QRCode';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/qrcode" element={<QRCodePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Toaster/>
    </Router>
  );
};