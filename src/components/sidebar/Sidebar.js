import React from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <div>
        <div className="w3-sidebar-con">
        
        <a href="" className="sideBar-con w3-button">My Profile</a>
        <a href="/Advertising" className="sideBar-con w3-button">Advertising
        </a>
        <a href="analytics" className="sideBar-con w3-button">Dashboard</a>
      </div>
    </div>
  )
}
