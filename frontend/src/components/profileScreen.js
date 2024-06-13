import React, { useEffect, useState } from 'react';
import './global.css';
import './profile-screen.css';
import Header from './header.js';
import UserSimple from '../assets/UserSimple.png';
import logo from '../assets/Logo.png'

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from backend API
    fetchProfileData();
  }, []);

  const fetchProfileData = () => {
    // Replace with actual endpoint to fetch profile data from backend
    // fetch('your-backend-api/profile')
    //   .then(response => response.json())
    //   .then(data => {
    //     setProfileData(data);
    //   })
    //   .catch(error => console.error('Error fetching profile data:', error));

    // Simulated data for demonstration
    const mockProfileData = {
      name: "Jaguar",
      role: "Admin",
      post: "DCP",
      dob: "18/02/1980",
      psUnder: ["Bawana", "Alipur"]
    };

    setProfileData(mockProfileData);
  };

  return (
    <>
      <Header />
      <div className="profile-screen">
        <section className="map1"></section>
        <div className="profile-screen-item"></div>
        <h3 className="profile">PROFILE</h3>
        {profileData && (
          <>
            <label className="name-abc-container">
              <b>NAME : </b>
              <span className="abc-abc">{profileData.name}</span>
            </label>
            <label className="role-admin-container">
              <b>ROLE : </b>
              <span className="admin">{profileData.role}</span>
            </label>
            <label className="post-dcp">
              <b>POST: </b>
              <span className="dcp">{profileData.post}</span>
            </label>
            <label className="dob-18021980">
              <b>DOB: </b>
              <span className="span">{profileData.dob}</span>
            </label>
            <label className="ps-under-bawana-container">
              <b>PS UNDER: </b>
              <span className="bawana-alipur">{profileData.psUnder.join(', ')}</span>
            </label>
          </>
        )}
        <img className="profile-screen-inner" alt="" src={logo} />
        <img className="vuesaxlinearuser-icon1" alt="" src={UserSimple} />
      </div>
    </>
  );
};

export default ProfileScreen;
