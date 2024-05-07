
import React from "react"
import './Contact.css'

function Contact(){
    const redirectToWhatsApp = () => {
        // Replace '1234567890' with the desired WhatsApp number
        const phoneNumber = '918399929297';
        
        // Construct the WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        
        // Redirect to WhatsApp
        window.location.href = whatsappUrl;
      }
    
      const redirectToPhone = () => {
        // Replace '1234567890' with the desired phone number
        const phoneNumber = '8399929297';
        
        // Construct the phone call URL
        const phoneUrl = `tel:${phoneNumber}`;
        
        // Redirect to phone call
        window.location.href = phoneUrl;
      }
    
      const redirectToGmail = () => {
        // Replace 'example@gmail.com' with the desired Gmail address
        const email = 'subalsaha011@gmail.com';
        
        // Construct the Gmail compose mail URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
        
        // Open the Gmail compose mail URL in a new tab/window
        window.open(gmailUrl, '_blank');
      }
      
    return(
        <>
                <div className="contact">
                    <h2>Contact Us</h2>
                    <div className="container">
                    <div className="card address">
                        <div className="items">
                            <img width="60" height="60" src="https://img.icons8.com/color/96/address--v1.png" alt="address--v1"/>
                            <p className='add'>Middle pelling, Pelling, Sikkim 737113</p>
                        </div>
                    </div>
                    <div className="card " style={{height:'auto'}}>
                        <div className="object">
                        <div className='objects'>
                            <img width="60" height="60" src="https://img.icons8.com/office/80/whatsapp--v1.png" alt="whatsapp--v1"/>
                            <img width="60" height="60" src="https://img.icons8.com/color/96/apple-phone.png" alt="apple-phone"/> 
                            <img width="60" height="60" src="https://img.icons8.com/color/96/gmail-new.png" alt="gmail-new"/>
                        </div>
                        <div className='objects'>
                            <h4>Whatsapp</h4>
                            <h4>Telephone</h4>
                            <h4>Gmail</h4>
                        </div>
                        <div className='objects'>
                            <button onClick={redirectToWhatsApp}>Click Here</button>
                            <button onClick={redirectToPhone}>Click Here</button>
                            <button onClick={redirectToGmail}>Click Here</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}

export default Contact