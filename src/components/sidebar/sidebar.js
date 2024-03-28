import React from "react";
import '../../styles/sidebar.css';


const SideBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <a href="/general_user">
          <li className="nav-element">General User</li>
        </a>
        <a href="/employee">
          <li className="nav-element">Employee</li>
        </a>
        <a href="/business">
          <li className="nav-element">Business</li>
        </a>
        <a href="/consultation">
          <li className="nav-element">Consultant</li>
        </a>
      </ul>
    </div>
  );
};

export default SideBar;
