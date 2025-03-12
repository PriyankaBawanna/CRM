import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./toggle.css";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    toast(`Toggle is now ${!isOn ? "ON" : "OFF"}`, {
      duration: 2000, // 2 seconds
      position: "bottom-right", // Left-hand side
      style: {
        background: "black", // Black background
        color: "white", // White text
      },
    });
  };

  return (

    <>
     <div className="toggle-container">
      <button onClick={handleToggle} className={`toggle-button ${isOn ? "on" : "off"}`}>
        <div className={`toggle-circle ${isOn ? "toggle-on" : "toggle-off"}`}></div>
      </button>
     
    </div>
   <Toaster  />
   


    </>
  );
}
