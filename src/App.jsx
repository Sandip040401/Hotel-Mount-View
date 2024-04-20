import React from 'react';
import './App.css';
import HotelCheckinForm from './Components/Form';
import DarkMode from './Components/Darkmode';
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
        <p>Surrounded by virgin pine forest and facing the majestic snow capped peaks of the Singalila range, The Mount View Hotel, hosted on the hilltop of Pelling, Sikkim, revokes a personal rendezvous with the Himalayan range. The hotel serves as a vantage point for catching a glimpse of nature’s blessed creations like birds, sunrises and sunsets, culminating the perfect retreat coupled with a cozy old-world charm. We have, in offer the most elegant and expansive rooms which amalgamate modern amenities with an ambience reflecting everything.<br/><br/>The Mount View Hotel is providing the right blend of service and luxury. All-round excellence and unparalleled levels of service. Accommodation is available in neat and clean rooms, which are well appointed with modern in-room facilities.A distinctive feature of The Mount View Hotel is their highly motivated and well trained staff who provide exceptionally attentive, personalised and warm service. Mount View Hotel have established a reputation for redefining the paradigm of luxury and excellence.</p>
    </div>

    </>
  );
}

export default App;
