import React from 'react';
import './global.css';
import './profile-screen.css';


function Header() {
  return (
    <>
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
      </>
  )
}

export default Header
