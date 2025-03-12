import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "./styles.css";
import calender from "../assets/calender.png"
import gmail from "../assets/gmail.png"
import mail from "../assets/mail.png"
import outlook from "../assets/outlook.png"
import zapier from "../assets/zapier.png"
import zoom from "../assets/zoom.png"
import Toggle from "./ToggleSwitch";


const data = [
  {
    id: 1,
    name: "Google Calendar",
    images: calender,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
  },
  {
    id: 2,
    name: "Gmail",
    images: gmail,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
  },
  {
    id: 3,
    name: "Zoom",
    images: zoom,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
  },
  {
    id: 4,
    name: "Zapier",
    images: zapier,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
  },
 
  {
    id: 4,
    name: "Outlook",
    images: outlook,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
  },
   
  {
    id: 4,
    name: "mail",
    images: mail,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
  },
];

const Card = () => {
  const handleToggle = (state, name) => {
    if (state) {
      toast.success(`${name} Enabled!`);
    } else {
      toast.error(`${name} Disabled!`);
    }
  };

  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card">
           <div className="imageContainer">
         <div><img src={item.images}/></div>
         <div><Toggle/></div>
          </div>
          <div>
          <h1 class="font-medium text-[14px] leading-[24px] align-middle subHeadingColor">{item.name}</h1>
          </div>
          <p className="text-[12px] leading-4 font-normal align-middle " style={{ fontFamily: 'Roboto', letterSpacing: '0%',color:"#5F5F5F" }}>
          {item.description}
        </p>
       
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Card;

