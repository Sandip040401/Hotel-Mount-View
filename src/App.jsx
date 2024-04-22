import React from 'react';
import './App.css';
import HotelCheckinForm from './Components/Form';
import DarkMode from './Components/Darkmode';
import Amenities from './Components/Amenities';
import Restaurant from './Components/Restaurant';
import GoogleMapEmbed from './Components/Map';
import Contact from './Components/Contact';

function App() {  

  return (
    <>
      <div className='topbar'>
        <h1>Hotel Mount View Pelling</h1>
        <div className='navbar'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallary</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className='btn-theme'>
          <DarkMode/>
        </button>
        <div className='sun-moon'>
          <img className='suun'src="/sun.png" alt="" />
          <img className='mooon' src="/moon.png" alt="" />
          <img className='cloud' src="/cloud.png" alt="" />
          <img className='cloud-1' src="/cloud.png" alt="" />
          <img className='cloud-2' src="/cloud.png" alt="" />
          <img className='cloud-3' src="/cloud.png" alt="" />
        </div>
      </div>
      <div className="middle">
        <HotelCheckinForm/>
      </div>
      <div className="bottom">
        <h2>About Mount View, Pelling</h2>
        <p>Surrounded by <b><font size='4'>Virgin pine forest</font></b> and facing the majestic <b><font size='4'>Snow capped peaks</font></b> of the <b><font size='4'>Singalila range</font></b>,The Mount View Hotel, hosted on the hilltop of Pelling, Sikkim, revokes a personal rendezvous with the Himalayan range. The hotel serves as a vantage point for catching a glimpse of nature’s blessed creations like birds, sunrises and sunsets, culminating the perfect retreat coupled with a cozy old-world charm. We have, in offer the most elegant and expansive rooms which amalgamate modern amenities with an ambience reflecting everything.<br/><br/> <b><font size='4'>The Mount View Hotel</font></b> is providing the right blend of service and luxury. All-round excellence and unparalleled levels of service. Accommodation is available in neat and clean rooms, which are well appointed with modern in-room facilities.A distinctive feature of The Mount View Hotel is their highly motivated and well trained staff who provide exceptionally attentive, personalised and warm service. Mount View Hotel have established a reputation for redefining the paradigm of luxury and excellence.</p>
      </div>
      <Amenities/>
      <Restaurant/>
      <div className="rates">
        <h2>Rates and Terms</h2>
        <div className="container">
          <ul>
            <li>The Mount View Hotel room charges are between  Rs 3000/- to Rs 5000/-per day.</li>
            <li>Foods, drinks charges are extra.</li>
            <li>Please inform Mount View Hotel in advance of your expected arrival time.</li>
            <li>Guests are required to show a photo identification and credit card upon check-in.</li>
            <li>Please note that all Special Requests are subject to availability and additional charges may apply.</li>
          </ul>
        </div>
      </div>
      <div className="map">
        <h2>How to Reach</h2>
        <div className="container">
          <GoogleMapEmbed/>
        </div>
      </div>
      <Contact/>

      <div className="footer">
        <p>Made by Sandip</p>
      </div>
    </>
  );
}

export default App;
