import React from 'react';
import './global.css';
import './profile-screen.css';

const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <section className="map1"></section>
      <button className="vuesaxlinearuser">
        <img className="user-icon" alt="" src="public/vuesaxlinearuser1@2x.png" />
      </button>
      <img className="group-icon2" alt="" src="./public/group@2x.png" />
      <button className="dashboard1">DASHBOARD</button>
      <button className="duty-chart2">DUTY CHART</button>
      <img className="profile-screen-child" alt="" src="./public/line-11@2x.png" />
      <button className="add-remove-staff2">ADD/ REMOVE STAFF</button>
      <button className="staff-members1">STAFF MEMBERS</button>
      <div className="profile-screen-item"></div>
      <label className="name-abc-container">
        <b>NAME : </b>
        <span className="abc-abc">ABC ABC</span>
      </label>
      <h3 className="profile">PROFILE</h3>
      <label className="role-admin-container">
        <b>ROLE : </b>
        <span className="admin">ADMIN</span>
      </label>
      <label className="post-dcp">
        <b>POST: </b>
        <span className="dcp">DCP</span>
      </label>
      <label className="dob-18021980">
        <b>DOB: </b>
        <span className="span">18/02/1980</span>
      </label>
      <label className="ps-under-bawana-container">
        <b>PS UNDER: </b>
        <span className="bawana-alipur">BAWANA, ALIPUR, .....</span>
      </label>
      <img className="profile-screen-inner" alt="" src="./public/group-2@2x.png" />
      <img className="vuesaxlinearuser-icon1" alt="" src="./public/vuesaxlinearuser1@2x.png" />
    </div>
  );
};

export default ProfileScreen;
