import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import StaffManagement from './components/StaffManagement.js';

import DutyTask from './components/DutyTask.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DutyTask />} />
        <Route path="/StaffManagement" element={<StaffManagement />} />
        <Route path="/DutyTask" element={<DutyTask />} />
       
      </Routes>
    </Router>
  );
}

export default App;
