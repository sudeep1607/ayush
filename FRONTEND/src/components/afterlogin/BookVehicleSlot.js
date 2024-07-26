


import React from 'react';

function BookVehicleSlot()  {
    return (
      <>
        <h3 className='link-container-text'>Book E- Vehicle Slot</h3>

        
    <div className="transport-container">
      
      <button type="submit" className='link-container-text'>Book Charging Station </button>
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
      </div>
      </>
    );
  }
  
  export default BookVehicleSlot;