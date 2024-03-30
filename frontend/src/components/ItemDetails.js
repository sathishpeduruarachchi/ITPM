import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import "../styles/ItemDetails.css";
import SideBar from "./sidebar/Sidebar";

function ItemDetails() {
  const { uniqueKey } = useParams(); // Get the uniqueKey parameter from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details based on the uniqueKey
    axios.get(`http://localhost:8070/business/getByRef/${uniqueKey}`)
      .then((response) => {
        setItem(response.data.stock);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, [uniqueKey]); // Ensure useEffect runs when uniqueKey changes



  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this?")) {
      axios
        .delete(`http://localhost:8070/business/delete/${uniqueKey}`)
        .then(() => {
          alert("Item deleted");
          // Navigate to another route after deletion (e.g., the homepage)
          window.location.href = "/item";
        })
        .catch((error) => {
          console.error(error);
          alert("Error deleting item. Please try again.");
        });
    }
  };

  return (
    <div className="item-details-container">
      
      {/* <h2>Item Details</h2> */}
      {item ? (
        <div>
          
         <div className="image-container">
            <img src={item.Image} alt={item.ItemName} className="item-image"/>
         </div> 
          <div className="item-content">
          <p><strong>Item Name:</strong> {item.ItemName}</p>         
          <p><strong>Company Name:</strong> {item.CompanyName}</p>
          <p><strong>Category:</strong> {item.Category}</p>
          <p><strong>Location:</strong> {item.Location}</p>
          <p><strong>Description:</strong> {item.Description}</p>
          <p><strong>Price:</strong> Rs.{item.Price}</p>
          </div>
          <Link to={`/update/${uniqueKey}`} className="update-button">
            Update
          </Link>
          <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemDetails;
