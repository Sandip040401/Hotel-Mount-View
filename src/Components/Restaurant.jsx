import React from "react"
import './Restaurant.css'
function Restaurant(){
    return(
        <>
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
                            <p>High Tea</p>
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
    )
}

export default Restaurant