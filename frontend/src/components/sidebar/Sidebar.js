import React from "react";
import '../../styles/sidebar.css';


const SideBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <a href="#">
          <li className="nav-element">General User</li>
        </a>
        <a href="">
          <li className="nav-element">Employee</li>
        </a>
        <a href="">
          <li className="nav-element">Business</li>
        </a>
        <a href="">
          <li className="nav-element">Consultant</li>
        </a>
      </ul>
    </div>
  );
};

export default SideBar;