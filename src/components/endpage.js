import React, { useState } from 'react';
import IG from "./pictures/Instagram_icon.png";
import './endpage.css';

function EndPage() {
    const [showHandle, setShowHandle] = useState(false);
    const igHandle = "@ramis.room";

    const handleImageClick = () => {
        setShowHandle(true); // Show the IG handle when clicked
    };

    return (
        <div className="container2">
            <img
                src={IG}
                alt="Instagram Icon"
                width={100}
                height={100}
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            />
            <div className={`ig-handle ${showHandle ? 'slide-in' : ''}`}>
                <a href="https://www.instagram.com/ramis.room/?hl=en">ramis.room</a>
            </div>
        </div>
    );
}

export default EndPage;
