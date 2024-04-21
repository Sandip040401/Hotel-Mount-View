import React from "react"
import './Amenities.css'
function Amenities(){
    return(
        <>
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
    )
}

export default Amenities