import React, { useEffect, useState } from 'react';
import "./changingtext.css"

function ChangingList() {
    const items = ["Portraits", "Video Marketing", "Directing", "Video Editing", "Model Photography"];
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
            setShowMessage(true); 

            
            setTimeout(() => {
                setShowMessage(false);
            }, 1000);
        }, 2000); 

        console.log(showMessage);
        
        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [items.length]); // Depend on the length of items

    return (
        <div>
            <h2>{items[currentItemIndex]}</h2>
        </div>
    );
}

export default ChangingList;
