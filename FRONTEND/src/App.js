import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/success/*" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
