import React from 'react';
import './App.css';
import HotelCheckinForm from './Components/Form';
import DarkMode from './Components/Darkmode';
import Amenities from './Components/Amenities';

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
        <p>Surrounded by <b><font size='5'>Virgin pine forest</font></b> and facing the majestic <b><font size='5'>Snow capped peaks</font></b> of the <b><font size='5'>Singalila range</font></b>, The Mount View Hotel, hosted on the hilltop of Pelling, Sikkim, revokes a personal rendezvous with the Himalayan range. The hotel serves as a vantage point for catching a glimpse of nature’s blessed creations like birds, sunrises and sunsets, culminating the perfect retreat coupled with a cozy old-world charm. We have, in offer the most elegant and expansive rooms which amalgamate modern amenities with an ambience reflecting everything.<br/><br/>The Mount View Hotel is providing the right blend of service and luxury. All-round excellence and unparalleled levels of service. Accommodation is available in neat and clean rooms, which are well appointed with modern in-room facilities.A distinctive feature of The Mount View Hotel is their highly motivated and well trained staff who provide exceptionally attentive, personalised and warm service. Mount View Hotel have established a reputation for redefining the paradigm of luxury and excellence.</p>
    </div>
    <Amenities/>
    <div className="restaurant">
        <h2>Restaurant</h2>
        <div className="container">
          <div className="card">
            <h3>Cuisine:</h3>
              <div className='item'>
                  <div className="items">
                    <img width="60" height="60" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-chinese-food-food-delivery-flaticons-lineal-color-flat-icons.png" alt="external-chinese-food-food-delivery-flaticons-lineal-color-flat-icons"/>
                    <p>Chinese</p>
                  </div>
                  <div className="items">
                    <img width="60" height="60" src="https://img.icons8.com/plasticine/100/rice-bowl.png" alt="rice-bowl"/>
                    <p>Indian</p>
                  </div>
                  <div className="items">
                    <img width="60" height="60" src="https://img.icons8.com/officel/80/spaghetti.png" alt="spaghetti"/>
                    <p>Continental</p>
                  </div>
              </div>
          </div>
          <div className="card">
            <h3>Open:</h3>
              <div className='item'>
                  <div className="items">
                    <img width="60" height="60" src="https://img.icons8.com/officel/80/breakfast.png" alt="breakfast"/>
                    <p>Breakfast</p>
                  </div>
                  <div className="items">
                    <img width="60" height="60" src="https://img.icons8.com/fluency/96/lunch.png" alt="lunch"/> 
                    <p>Lunch</p>
                  </div>
                  <div className="items">
                    <img width="60" height="60" src="https://img.icons8.com/doodle/96/tea--v1.png" alt="tea--v1"/>
                    <p>Tea</p>
                  </div>
                  <div className="items">
                    <img width="60" height="60" src="https://img.icons8.com/officel/80/dinner.png" alt="dinner"/>
                    <p>Dinner</p>
                  </div>
              </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default App;
