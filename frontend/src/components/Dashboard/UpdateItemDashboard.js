import React from "react";
import Navbar from "../navbar/navbar";
import "../../styles/Dashboard.css";
import ItemUpdate from "../ItemUpdate";





const UpdateItemDashboard = () =>{

    
    return (

        <div>
            <Navbar/>

            <div className="main-container">
                <div className="nav-bar">

                    <ul className="nav-list">
                    <a href="bhome">
                            <li className="nav-element">Home</li>
                        </a>

                        <a href="/item">
                            <li className="nav-element active-element">Products</li>
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
         <ItemUpdate/>
         
        </div>
                

            </div>
            
            
        </div>


    )
}

export default UpdateItemDashboard;