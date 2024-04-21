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
    <div className="amenities">
      <h2>Hotel Amenities</h2>
      <div className="container">
        <div className="card">
          <div className="svg-logo">
            <img width="70" height="70" src="https://img.icons8.com/arcade/64/water-heater.png" alt="water-heater"/>
          </div>
          <div className="svg-text">
            <h3>24hrs Electricity and Water</h3>
          </div>
        </div>
        <div className="card">
          <div className="svg-logo">
          <img width="70" height="70" src="https://img.icons8.com/external-others-pike-picture/50/external-can-milk-factory-product-others-pike-picture-5.png" alt="external-can-milk-factory-product-others-pike-picture-5"/>
          </div>
          <div className="svg-text">
            <h3>Temperature controlled Rooms</h3>
          </div>
        </div>
        <div className="card">
          <div className="svg-logo">
            <img width="70" height="70" src="https://img.icons8.com/dusk/64/restaurant.png" alt="restaurant"/>  
          </div>
          <div className="svg-text">
            <h3>Restaurant</h3>
          </div>
        </div>
        <div className="card">
          <div className="svg-logo">
            <img width="70" height="70" src="https://img.icons8.com/external-others-pike-picture/50/external-Conference-Hall-forum-others-pike-picture.png" alt="external-Conference-Hall-forum-others-pike-picture"/>
          </div>
          <div className="svg-text">
            <h3>Conference Hall</h3>
          </div>
        </div>
        <div className="card">
          <div className="svg-logo">
            <img width="70" height="70" src="https://img.icons8.com/officel/80/car-rental.png" alt="car-rental"/>
          </div>
          <div className="svg-text">
            <h3>Car Rental</h3>
          </div>
        </div>
        <div className="card">
          <div className="svg-logo">
            <img width="70" height="70" src="https://img.icons8.com/cotton/64/hospital--v2.png" alt="hospital--v2"/>
          </div>
          <div className="svg-text">
            <h3>Doctor on Call</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
