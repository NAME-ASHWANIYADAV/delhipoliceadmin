import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import StaffManagement from './components/StaffManagement.js';

import DutyTask from './components/DutyTask.js';
import LoginScreen from './components/LoginScreen.js';
import profile-screen from './components/profile.screen.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DutyTask />} />
        <Route path="/StaffManagement" element={<StaffManagement />} />
        <Route path="/DutyTask" element={<DutyTask />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
        <Route path="/profile-screen" element={<profile-screen />} />
      </Routes>
    </Router>
  );
}

export default App;
