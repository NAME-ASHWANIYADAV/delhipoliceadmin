import React from 'react';
import '../styles/dutychart2.css'; // Ensure this CSS file is in the src directory or adjust the path accordingly.
import { useNavigate } from 'react-router-dom';
import groupImage from '../assets/Group.png';
import userIcon from '../assets/user.svg';
import mapImage from '../assets/MAP.png';



const StaffManagement = () => {
 
    const navigate = useNavigate();
  
    const handleRedirect = () => {
      navigate('/DutyTask');
    };
  return (
    <div style={{ 
      backgroundImage: `url(${mapImage})`, 
      backgroundRepeat: 'no-repeat', 
      fontFamily: 'Montserrat' 
    }}>
      <div className="nav">
        <img src={groupImage} alt="#" />
        <button className="nav-button">DASHBOARD</button>
      <button className="nav-button" onClick={handleRedirect} >DUTY CHART</button>
      <button className="nav-button" >ADD/REMOVE STAFF</button>
      <button className="nav-button">STAFF MEMBERS</button>
        <img src={userIcon} alt="#" />
      </div>
      <br /><br /><br />
      <div className="selectstation">
        <h2>SELECT POLICE STATION</h2>
        <form action="/action_page.PH.p">
          <select className="select" style={{ backgroundColor: '#EBEBEB', width: '150px', border: 'none' }}>
            <option value="volvo">AREA</option>
            <option value="saab">AREA</option>
            <option value="opel">AREA</option>
            <option value="audi">AREA</option>
          </select>
          <input
            type="submit"
            value="SUBMIT"
            className="select"
            style={{ backgroundColor: '#009ADC', color: '#fff', textAlign: 'center', margin: '20px', width: '150px', border: 'none' }}
          />
        </form>
      </div>
      <br /><br />
      <div className="task">
        <h2>ADD/REMOVE STAFF</h2>
        <div className="names">
          <label>NAME</label>
          <input type="text" className="inputclass" style={{ borderRadius: '30px', borderColor: '#b7e2e7' }} />
          <label>PH. NO.</label>
          <input type="text" className="inputclass" style={{ borderRadius: '30px', borderColor: '#b7e2e7' }} />
        </div>
        <br /><br /><br />
        <div className="buttons">
          <button className="button">ADD</button>
          <button className="button">REMOVE</button>
        </div>
        <p style={{ color: 'green' }}>STAFF MEMBER HAS BEEN ADDED SUCCESSFULLY!</p>
      </div>
    </div>
  );
};

export default StaffManagement;
