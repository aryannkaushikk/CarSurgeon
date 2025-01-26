import React from "react";
import NavButton from "./NavButton";

export default function NavBar({ buttonPressed }) {

  const handleButtonClick = (element) => {
    const targetDiv = document.getElementById(element);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="navbox" style={{ top: buttonPressed ? 0 : "-100%" }}>
      <div id="navbar">
        <div id="logo">
          <img src="Media/logo.jpg" alt="logo"/>
        </div>
        <div className="navigation">
          <NavButton key="1" index="0" data="Home" onClick={handleButtonClick}/>
          <NavButton key="2" index="1" data="Services" onClick={handleButtonClick}/>
          <NavButton key="3" index="2" data="Reviews" onClick={handleButtonClick}/>
          <NavButton key="4" index="3" data="Contact Us" onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}
