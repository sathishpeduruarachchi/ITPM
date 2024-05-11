import React from "react";
import Navbar from "../navbar/navbar";
import "../../styles/Dashboard.css";
import BisHome from "../BisHome";





const HomeDashboard = () =>{

    
    return (

        <div>
            <Navbar/>

            <div className="main-container">
                <div className="nav-bar">

                    <ul className="nav-list">
                    <a href="bhome">
                            <li className="nav-element active-element">Home</li>
                        </a>

                        <a href="/item">
                            <li className="nav-element">Products</li>
                        </a>
                        <a href="#">
                        
                            <li className="nav-element">Inquiries</li>
                        </a>
                        <a href="#">
                        
                            <li className="nav-element">Profile</li>
                        </a>
                      
                    

                       

                    </ul>
                </div>
                <div className="content-container">
         <BisHome/>
         
        </div>
                

            </div>
            
            
        </div>


    )
}

export default HomeDashboard;