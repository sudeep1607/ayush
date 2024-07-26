// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      if(username!="admin" && password!="admin")
      {
        alert('Please check username and password');
      }
      else{ 
        navigate('/Success');
      }
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-container">
      
      <div className="formbox">
      <form  onSubmit={handleSubmit} className="login-form">
        <div className="form-control">
        <h3><u>Login</u></h3>
          <label htmlFor="username">   Username  </label>
          <input type="text" id="username" autoComplete="disabled" value={username}
            onChange={(e) => setUsername(e.target.value)} name="username"/>
        </div>
        <div className="form-control">
          <label htmlFor="password">   Password  </label>
          <input type="password" id="password" autocomplete="new-password" value={password}
            onChange={(e) => setPassword(e.target.value)} autoComplete="disabled" name="password" />
          &nbsp;
          <button type="submit">Login</button> <a  href='' target='blank'><h4 className='pwd-link'>Forgot Password</h4></a>
          
        </div>
          <button type="submit">New User? Register</button> <br/>
          
        
      </form>
      </div>
    </div>
  );
}
export default Login;
