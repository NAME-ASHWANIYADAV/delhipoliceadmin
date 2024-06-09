import React from 'react';
import './global.css';
import './index.css';

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <section className="map"></section>
      <div className="login-screen-child"></div>
      <input className="login-screen-item" type="text" />

      <input className="login-screen-inner" type="text" />

      <button className="rectangle-button"></button>
      <div className="mobile-number">Mobile Number</div>
      <div className="password">Password</div>
      <div className="sign-in">Sign in</div>
      <h1 className="sign-in1">Sign In</h1>
      <div className="group-parent">
        <img className="group-icon" alt="" src={process.env.PUBLIC_URL + "/group@2x.png"} />

        <h1 className="constableonpatrol">ConstableOnPatrol</h1>
      </div>
      <div className="image-2-parent">
        <img className="image-2-icon" alt="" src={process.env.PUBLIC_URL + "/image-2@2x.png"} />

        <h3 className="delhi-police">DELHI POLICE</h3>
        <div className="shanti-sewa-nyaya">SHANTI SEWA NYAYA</div>
      </div>
    </div>
  );
}

export default LoginScreen;
