import React from "react";
import Navbar from "../navbar/navbar";
import "../../styles/Dashboard.css";
import AddItems from "../AddItems";





const AddItemsDashboard = () =>{

    
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
         <AddItems/>
         
        </div>
                

            </div>
            
            
        </div>


    )
}

export default AddItemsDashboard;