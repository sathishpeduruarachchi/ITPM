import React from "react";
import '../../styles/sidebar.css';


const GeneralUserSideBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <a href="/add_general_infor">
          <li className="nav-element">Add General Infor</li>
        </a>
        <a href="/skill_development">
          <li className="nav-element">Skill development</li>
        </a>
        <a href="/jobs">
          <li className="nav-element">Find jobs</li>
        </a>
        {/* <a href="/consultation">
          <li className="nav-element">Consultant</li>
        </a> */}
      </ul>
    </div>
  );
};

export default GeneralUserSideBar;
