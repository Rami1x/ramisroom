import React, { useState, useRef } from "react";
import IMG1 from "./pictures/1.JPG";
import IMG2 from "./pictures/2.JPG";
import IMG3 from "./pictures/3.jpg";
import IMG4 from "./pictures/4.jpg";
import IMG5 from "./pictures/5.jpg";
import IMG6 from "./pictures/6.jpg";
import IMG7 from "./pictures/7.JPG";
import IMG8 from "./pictures/8.jpg";
import IMG9 from "./pictures/9.jpg";
import IMG10 from "./pictures/10.jpg";
import "./imageLib.css";

function Pictures() {
  // Image array with custom descriptions
  const imageSort = [
    { src: IMG1, description: "Misbehave Photoshoot 1: 29 Apr 2023" },
    { src: IMG2, description: "Misbehave Photoshoot 1: 29 Apr 2023" },
    { src: IMG3, description: ": 03 Jul 2023" },
    { src: IMG4, description: ": 24 Sept 2023" },
    { src: IMG5, description: ": 29 Aug 2023" },
    { src: IMG6, description: ": 08 Oct 2023" },
    { src: IMG7, description: ": 09 Nov 2023" },
    { src: IMG8, description: ": 31 Oct 2023" },
    { src: IMG9, description: "Lil Berete Concert: 11 Nov 2023" },
    { src: IMG10, description: "Lil Berete Concert: 11 Nov 2023" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");
  const descriptionRef = useRef(null);

  const handleImageClick = (index) => {
    setSelectedImage(imageSort[index].src);
    setDescription(imageSort[index].description);


    setTimeout(() => {
      descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  return (
    <div className="image-gallery">
      <ul className="image-list">
        {imageSort.map((image, index) => (
          <li key={index}>
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="image-thumb"
              onClick={() => handleImageClick(index)} // Handle image click
            />
          </li>
        ))}
      </ul>

      {selectedImage && (
        <div ref={descriptionRef} className={`image-description fade-in`}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Pictures;
