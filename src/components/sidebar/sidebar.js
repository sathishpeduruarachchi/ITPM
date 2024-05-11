import React from "react";
import '../../styles/sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = ({ userId }) => {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
      <Link to={`/general_user/${userId}`}>
          <li className="nav-element">General User</li>
        </Link>
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

