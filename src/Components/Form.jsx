import React, { useState } from 'react';
import './Form.css'
function HotelCheckinForm() {
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [numAdults, setNumAdults] = useState(1);
    const [numChildren, setNumChildren] = useState(0);
    const [numRooms, setNumRooms] = useState(1);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, for example, sending the form data to a backend server
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='booking-form'>
                <div className="checkin">
                    <label htmlFor="checkin_date"><span className='label-name'>Check-in Date:</span></label>
                    <input type="date" className='form-name' id="checkin_date" value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} />
                </div>
                <div className="checkout">
                    <label htmlFor="checkout_date"><span className='label-name'>Check-out Date:</span></label>
                    <input type="date" id="checkout_date" className='form-name' value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} />
                </div>
                <div className="adult">
                    <label htmlFor="num_adults"><span className='label-name'>Number of Adults:</span></label>
                    <input type="number" className='form-number' id="num_adults" min="1" value={numAdults} onChange={(e) => setNumAdults(parseInt(e.target.value))} />      
                </div>
                <div className="children">
                    <label htmlFor="num_children"><span className='label-name'>Number of Children:</span></label>
                    <input type="number" className='form-number' id="num_children" min="0" value={numChildren} onChange={(e) => setNumChildren(parseInt(e.target.value))} />
                </div>
                <div className="room">
                    <label htmlFor="num_rooms"><span className='label-name'>Number of Rooms:</span></label>
                    <input type="number" className='form-number' id="num_rooms" min="1" value={numRooms} onChange={(e) => setNumRooms(parseInt(e.target.value))} />
                </div>
                <button className="form-btn" type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default HotelCheckinForm;