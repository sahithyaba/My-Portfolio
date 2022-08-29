import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='services'>
            {/* Left Side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <button className='button i-button'>Hire Me</button>
            </div>
            
            {/* Right Side */}
            <div className="cards">
                Right Side
            </div>
        </div>
    );
};

export default Services;