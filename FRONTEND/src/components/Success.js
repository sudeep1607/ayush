import React from 'react';
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Transport from './afterlogin/Transport';
import Sport from './afterlogin/Sport';
import EventSocial from './afterlogin/EventsSocial';


function Success() {
  return (
    <>
    
    <div className='home-container'>
    <div className='links-container'>
        <ul className='link-container-text'>
          <li ><Link className='link-container-text' to="transport"> E-TRANSPORT</Link></li>
          <li><Link className='link-container-text' to="sport">HEALTH & FITNESS</Link></li>
          <li><Link className='link-container-text' to="event">COMMUNITY</Link></li>
        </ul>
    </div>
    <div className='page-container'>
      <Routes>
        <Route path="transport" element={<Transport />} />
        <Route path="sport" element={<Sport />} />
        <Route path="event" element={<EventSocial />} />
      </Routes>
      </div>
    </div>
    </>
  );
}

export default Success;
