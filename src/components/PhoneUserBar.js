import React, { useState } from "react";
import "../css/PhoneUserBar.css";
const PhoneUserBar = ({ data: { name, status, imageUrl } }) => {
  const [isActive, displayMenu] = useState(false);
  const setClassName = () => {
    displayMenu(!isActive);
  };
  return (
    <div className="phone-user-bar">
      <div className="user-wrapper">
        <img src={imageUrl} alt="" />
        <h2>{name}</h2>
        <p>{status}</p>
      </div>
      <div onClick={setClassName} className="menu-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`menu ${isActive ? "active" : ""}`}>
        <li>View contact</li>
        <li>Search</li>
        <li>Media and links</li>
        <li>Mute notifications</li>
        <li>Wallpaper</li>
        <li>More</li>
      </ul>
    </div>
  );
};

export default PhoneUserBar;
