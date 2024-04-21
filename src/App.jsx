import React from 'react';
import './App.css';
import HotelCheckinForm from './Components/Form';
import DarkMode from './Components/Darkmode';
import Amenities from './Components/Amenities';
import Restaurant from './Components/Restaurant';
import GoogleMapEmbed from './Components/Map';

function App() {  

  const redirectToWhatsApp = () => {
    // Replace '1234567890' with the desired WhatsApp number
    const phoneNumber = '916002180629';
    
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  }

  const redirectToPhone = () => {
    // Replace '1234567890' with the desired phone number
    const phoneNumber = '916002180629';
    
    // Construct the phone call URL
    const phoneUrl = `tel:${phoneNumber}`;
    
    // Redirect to phone call
    window.location.href = phoneUrl;
  }

  const redirectToGmail = () => {
    // Replace 'example@gmail.com' with the desired Gmail address
    const email = 'iemsandip@gmail.com';
    
    // Construct the Gmail compose mail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    
    // Open the Gmail compose mail URL in a new tab/window
    window.open(gmailUrl, '_blank');
  }
  
  

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
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="container">
          <div className="card">
            <div className="items">
              <img width="60" height="60" src="https://img.icons8.com/color/96/address--v1.png" alt="address--v1"/>
              <p className='add'>Middle pelling, Pelling, Sikkim 737113</p>
            </div>
          </div>
          <div className="card " style={{height:'auto'}}>
            <div className="object">
              <div className='objects'>
                <img width="60" height="60" src="https://img.icons8.com/office/80/whatsapp--v1.png" alt="whatsapp--v1"/>
                <h4>Whatsapp</h4>
              </div>
              <button onClick={redirectToWhatsApp}>Click Here</button>
            </div>
            <div className="object">
              <div className='objects'>
                <img width="60" height="60" src="https://img.icons8.com/color/96/apple-phone.png" alt="apple-phone"/> 
                <h4>Telephone</h4>
              </div>
              <button onClick={redirectToPhone}>Click Here</button>
            </div>
            <div className="object">
              <div className='objects'>
                <img width="60" height="60" src="https://img.icons8.com/color/96/gmail-new.png" alt="gmail-new"/>
                <h4>Gmail</h4>
              </div>
              <button onClick={redirectToGmail}>Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
