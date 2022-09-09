import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  
    return (
      <div className="nav-cont">
        <img
          src="https://assets-global.website-files.com/600052ee4c8df3556e66c567/62cd4b83f1f34840f08c182b_LH-Chambers2022-Header-Background%20Only.jpg"
          alt="logo"
        />
        <h1>Light<span>House</span></h1>
        <NavLink className="nav-but" to="/">Home</NavLink>
        <NavLink className="nav-but"to="/section">Section</NavLink>
        <NavLink className="nav-but"to="/quiz">Quiz</NavLink>
       
      </div>
    );
}
export default Nav