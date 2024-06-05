import React from 'react';
import '../styles/dutytask.css';
import groupImage from '../assets/Group.png';
import userIcon from '../assets/user.svg';
import mapImage from '../assets/MAP.png';




const DutyTask = () => {
  return (
    <div  className='background'style={{ 
      backgroundImage: `url(${mapImage})`, 
      backgroundRepeat:'no-repeat',
      fontFamily: 'Montserrat',
      
    }}>
      <div className="nav">
      <img src={groupImage} alt="Group" className='logo'/>

      <button className="nav-button">DASHBOARD</button>
      <button className="nav-button">DUTY CHART</button>
      <button className="nav-button">ADD/REMOVE STAFF</button>
      <button className="nav-button">STAFF MEMBERS</button>
        <img src={userIcon} alt="#" className='user'/>
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
        <h2>STAFF DUTY TASK</h2>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div className="names" key={num}>
            <h3 style={{ border: 'solid', borderColor: '#b7e2e7', borderRadius: '30px', width: '100px', textAlign: 'center', position: 'relative', bottom: '15px' }}>
              {num}.
            </h3>
            <label>NAME</label>
            <input type="text" className="inputclass" style={{ borderRadius: '30px', borderColor: '#b7e2e7' }} />
            <label>PH. NO.</label>
            <input type="text" className="inputclass" style={{ borderRadius: '30px', borderColor: '#b7e2e7' }} />
            <label>START TIME</label>
            <input type="text" className="inputclass" style={{ borderRadius: '30px', borderColor: '#b7e2e7' }} />
            <label>END TIME</label>
            <input type="text" className="inputclass" style={{ borderRadius: '30px', borderColor: '#b7e2e7' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DutyTask;
