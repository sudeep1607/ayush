import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookVehicleSlot from './BookVehicleSlot';
import { Route, Routes, Link } from 'react-router-dom';
const Transport  = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  const bookslot = (e) =>
  {
    navigate('/BookVehicleSlot');
  }

  const options = [
    {
      id: 1,
      name: 'E-CAR'
    },
    {
      id: 2,
      name: 'E-BIKE'
    }
    ,
    {
      id: 3,
      name: 'E-CYCLE'
    }
  ];
  

  return (
    <div className="transport-container">
      
      <button type="submit" onClick={bookslot} className='link-container-text'>Book Charging Station </button>
      <div className="formbox">
      <form>
      <div className="transport-control">
        <h3><u>Register E - Vehicle</u></h3>
          <label htmlFor="VehicleType">   Vehicle Type  </label>
          <input type="text"   value ="E-CAR" />  <br/> 
          <label htmlFor="vehicle Number">   Vehicle Number </label>
          <input type="text" id="vehicleNumber" placeholder='XXXX7890'/> <br/>  
          <label htmlFor="vehicleName">  Vehicle Name : </label>
          <input type="text" id="vehicleName" placeholder='XXXXXX'/><br/>
          <label htmlFor="vehicleRdate">  Date : </label>
          <input type="date" id="vehicleName" placeholder='XXXXXX'/> <br/>
          <button type="submit">Register</button>
        </div> 
      </form>
      </div>
      <Routes>
        <Route path="transport" element={<BookVehicleSlot/>} />
      </Routes>
      </div>

      
  
    );
  }
  export default Transport;
  