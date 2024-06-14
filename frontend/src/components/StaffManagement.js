import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header';
import mapImage from '../assets/MAP.png';
import '../styles/dutychart2.css';

const StaffManagement = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [selectedArea, setSelectedArea] = useState('');
  const [users, setUsers] = useState([]);

  const areaNames = ["Bawana", "shahbad dairy", "Narela", "Narela Industrial Area", "Alipur", "Samaypur Badli", "Swaroop Nagar", "Bhalswa Dairy"];

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setIsValidPhoneNumber(value.length === 10);
    }
  };

  const handleAreaChange = (e) => {
    const value = e.target.value;
    setSelectedArea(value);
  };

  const handleAddStaff = async () => {
    if (name.trim() === '' || phoneNumber.trim() === '') {
      toast.error('Please fill out both Name and Phone Number.');
    } else if (!isValidPhoneNumber) {
      toast.error('Please enter a valid 10-digit Phone Number.');
    } else if (!selectedArea) {
      toast.error('Please select an area.');
    } else {
      try {
        await axios.post('http://localhost:4000/api/users', {
          name,
          mobileNumber: phoneNumber,
          areas: [selectedArea]
        });
        toast.success('STAFF MEMBER HAS BEEN ADDED SUCCESSFULLY!');
        setName('');
        setPhoneNumber('');
        setIsValidPhoneNumber(true);
        await handleSubmit();
      } catch (error) {
        const errorMsg = error.response && error.response.data ? error.response.data.msg : 'Failed to add staff member.';
        toast.error(errorMsg);
      }
    }
  };

  const handleRemoveStaff = async () => {
    if (name.trim() === '' || phoneNumber.trim() === '') {
      toast.error('Please fill out both Name and Phone Number.');
    } else if (!selectedArea) {
      toast.error('Please select an area.');
    } else {
      try {
        await axios.delete('http://localhost:4000/api/users', {
          data: { name, mobileNumber: phoneNumber, areas: [selectedArea] }
        });
        toast.success('STAFF MEMBER HAS BEEN REMOVED SUCCESSFULLY!');
        setName('');
        setPhoneNumber('');
        setIsValidPhoneNumber(true);
        await handleSubmit();
      } catch (error) {
        const errorMsg = error.response && error.response.data ? error.response.data.msg : 'Failed to remove staff member.';
        toast.error(errorMsg);
      }
    }
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!selectedArea) {
      toast.error('Please select an area.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:4000/api/users', {
        params: { area: selectedArea }
      });
      setUsers(response.data);
      toast.success('Users fetched successfully!');
      
      // Navigate to new URL with selected area as query parameter
      navigate(`/StaffManagement?area=${encodeURIComponent(selectedArea)}`);
      
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error('No users found in that area.');
      } else {
        toast.error('Failed to fetch users.');
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <Header />
      <div
        style={{
          backgroundImage: `url(${mapImage})`,
          backgroundRepeat: 'no-repeat',
          fontFamily: 'Montserrat',
        }}
      >
        <br />
        <br />
        <br />
        <div className="selectstation">
          <h2>SELECT POLICE STATION</h2>
          <form onSubmit={handleSubmit}>
            <select
              className="select"
              style={{
                backgroundColor: '#EBEBEB',
                width: '150px',
                border: 'none',
              }}
              value={selectedArea}
              onChange={handleAreaChange}
            >
              <option value="" disabled>Select area</option>
              {areaNames.map((area, index) => (
                <option key={index} value={area}>{area}</option>
              ))}
            </select>
            <input
              type="submit"
              value="SUBMIT"
              className="select"
              style={{
                backgroundColor: '#009ADC',
                color: '#fff',
                textAlign: 'center',
                margin: '20px',
                width: '150px',
                border: 'none',
              }}
            />
          </form>
        </div>
        <br />
        <br />
        <div className="task">
          <h2>ADD/REMOVE STAFF</h2>
          <div className="names">
            <label>NAME</label>
            <input
              type="text"
              className="inputclass"
              placeholder="Enter the Name"
              value={name}
              onChange={handleNameChange}
              style={{ borderRadius: '30px', borderColor: '#b7e2e7' }}
            />
            <label>PH. NO.</label>
            <input
              type="text"
              className="inputclass"
              placeholder="Enter the Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              style={{
                borderRadius: '30px',
                borderColor: isValidPhoneNumber ? '#b7e2e7' : 'red',
              }}
            />
            {!isValidPhoneNumber && (
              <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                Please enter a valid 10-digit phone number.
              </p>
            )}
          </div>
          <br />
          <br />
          <br />
          <div className="buttons">
            <button className="button" onClick={handleAddStaff} disabled={name.trim() === '' || phoneNumber.trim() === '' || !selectedArea}>
              ADD
            </button>
            <button className="button" onClick={handleRemoveStaff} disabled={name.trim() === '' || phoneNumber.trim() === '' || !selectedArea}>
              REMOVE
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className="userlist">
          <h2>USERS IN SELECTED AREA</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.name} - {user.mobileNumber}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StaffManagement;
