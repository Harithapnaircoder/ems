import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp'; 
import Navbar from './Components/Navbar';
import Employee from './Components/Employee';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/employee" element={<Employee />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
