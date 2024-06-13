import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header';
import mapImage from '../assets/MAP.png';
import '../styles/dutychart2.css'; // Ensure this CSS file is in the src directory or adjust the path accordingly.

const StaffManagement = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true); // Initially assume valid

  // Array of area names
  const areaNames = ["Bawana", "shahbad dairy", " Narela", "Narela Industrial Area", "Alipur ", "Samaypur Badli", "Swaroop Nagar", "Bhalswa Dairy"];

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Check if the entered value is numeric and 10 digits long
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setIsValidPhoneNumber(value.length === 10);
    }
  };

  const handleAddStaff = () => {
    // Check if both name and phone number are filled
    if (name.trim() === '' || phoneNumber.trim() === '') {
      toast.error('Please fill out both Name and Phone Number.');
    } else if (!isValidPhoneNumber) {
      toast.error('Please enter a valid 10-digit Phone Number.');
    } else {
      // Simulate adding staff (placeholder logic)
      toast.success('STAFF MEMBER HAS BEEN ADDED SUCCESSFULLY!');
      setName('');
      setPhoneNumber('');
      setIsValidPhoneNumber(true);
    }
  };

  const handleRemoveStaff = () => {
    // Check if both name and phone number are filled
    if (name.trim() === '' || phoneNumber.trim() === '') {
      toast.error('Please fill out both Name and Phone Number.');
    } else {
      toast.success('STAFF MEMBER HAS BEEN REMOVED SUCCESSFULLY!');
      setName('');
      setPhoneNumber('');
      setIsValidPhoneNumber(true);
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
          <form action="/action_page.PH.p">
            <select
              className="select"
              style={{
                backgroundColor: '#EBEBEB',
                width: '150px',
                border: 'none',
              }}
            >
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
            <button className="button" onClick={handleAddStaff} disabled={name.trim() === '' || phoneNumber.trim() === ''}>
              ADD
            </button>
            <button className="button" onClick={handleRemoveStaff} disabled={name.trim() === '' || phoneNumber.trim() === ''}>
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffManagement;
