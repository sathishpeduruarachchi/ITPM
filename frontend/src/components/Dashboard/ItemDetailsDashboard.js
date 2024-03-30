import React from "react";
import Navbar from "../navbar/navbar";
import "../../styles/Dashboard.css";
import ItemDetails from "../ItemDetails";





const ItemDetailsDashboard = () =>{

    
    return (

        <div>
            <Navbar/>

            <div className="main-container">
                <div className="nav-bar">

                    <ul className="nav-list">
                    <a href="#">
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
         <ItemDetails/>
         
        </div>
                

            </div>
            
            
        </div>


    )
}

export default ItemDetailsDashboard;