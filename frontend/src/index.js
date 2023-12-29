import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './modules/shares/ErrorPage';
import MyLogin from './modules/auth/MyLogin';
import MyRegister from './modules/auth/MyRegister';
import Landing from './modules/dashboard/Landing'
import MyNavbar from './modules/shares/MyNavbar'
import MySidebar from './modules/shares/MySidebar';
import MyFooter from './modules/shares/MyFooter'
import './modules/css/global.css'
import DetailsPage from './modules/dashboard/DetailsPage';
import MyUpdate from './modules/dashboard/MyUpdate' 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyNavbar/> 
        <Routes>
          <Route path='*' element={<ErrorPage/> } />
          <Route path='' element={<MyLogin/> } />
          <Route path='register' element={<MyRegister/> } />
          <Route path='dashboard' element={<Landing/>} />
          <Route path='sidebar' element={<MySidebar/> } />
          <Route path='footer' element={<MyFooter/> } />
          <Route path='dashboard/userdetail/:id' element={<DetailsPage/> } />
          <Route path='dashboard/update/:id' element={<MyUpdate/>} />
          
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
