import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import StaffManagement from './components/StaffManagement.js';

import DutyTask from './components/DutyTask.js';
import LoginScreen from './components/LoginScreen.js';
import ProfileScreen from './components/profileScreen.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/StaffManagement" element={<StaffManagement />} />
        <Route path="/DutyTask" element={<DutyTask />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
        <Route path="/profileScreen" element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
