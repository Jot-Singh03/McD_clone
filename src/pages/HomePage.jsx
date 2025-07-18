import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";



const videos = ["/add.mp4", "/add2.mp4"];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videoRef = useRef(null);
  
  const navigate = useNavigate();
  
  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

 useEffect(() => {
  const video = videoRef.current;
  if (video) {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }
}, [currentIndex]);

  return (
    <div className="Page">
      <div className="Promo">
        <video
          ref={videoRef}
          src={videos[currentIndex]}
          autoPlay
          muted
          playsInline
          className="promo-video"
          disablePictureInPicture
          controls={false}
          onEnded={handleVideoEnd}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      <div className="Buttons">
        <div className="Qr">
          <h1>Scan or tap for</h1>
          <p>Deals and more</p>
          <img className="q" src="/qr.png" alt="QR" />
          <i className="fa-solid fa-chevron-down fa-2x" ></i>
        </div>
        <div>

    
          <div
            className="Order"
            onClick={() => navigate("/choice")}
            style={{ cursor: "pointer" }}
          >
            <h1>Start Order</h1>
            <p>to get deliciousness</p>
          </div>
          <div className="Access">
            <i className="fa-solid fa-wheelchair fa-2x" ></i>
            <h4>Accessibility</h4>
        </div>
        <div className="cal-msg">
          <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request. 2.000 calories a day is used for general nutrition advice, but calorie needs can vary. Additional nutrition information available upon request. Additional nutrition information..</p>
        </div>
          </div>
      </div>

      
    </div>
  );
};

export default HomePage;
