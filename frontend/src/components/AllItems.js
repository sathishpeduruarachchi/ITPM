// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/AllItems.css";

// function AllItems() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Fetch all items from the backend
//     axios.get("http://localhost:8070/business").then((response) => {
//       setItems(response.data);
//     }).catch((error) => {
//       console.error(error);
//       // Handle error
//     });
//   }, []);

//   return (
//     <div className="container">
//       <h2>All Items</h2>
//       <div className="row row-cols-3 g-4">
//         {items.map((item) => (
//           <div className="col" key={item.uniqueKey}>
//             <div className="card">
//               <img src={item.Image} className="card-img-top" alt={item.ItemName} />
//               <div className="card-body">
//                 <h5 className="card-title">{item.ItemName}</h5>
//                 <p className="card-text">Price: {item.Price}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllItems;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/AllItems.css";
import SideBar from "./sidebar/Sidebar";
import { FaPlus } from 'react-icons/fa'; 

function AllItems() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    
    axios.get("http://localhost:8070/business")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
        
      });
  }, []);
  const filteredItems = items.filter((item) => {
    return item.ItemName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Function to handle changes to the search input
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="container-a">
      <div className="top-right-button">
        <Link to="/add" className="btn btn-primary">Add Item</Link>
      </div>
      <h2>All Items</h2>
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="form-control mb-3"
      />
      <div className="row row-cols-3 g-4">

      
        {items.map((item) => (
          <div className="col" key={item.uniqueKey}>
            <Link to={`/item/${item.uniqueKey}`} className="card-link">
              <div className="card">
                <img src={item.Image} className="card-img-top item-image" alt={item.ItemName} />
                <div className="card-body">
                  <h5 className="card-title">{item.ItemName}</h5>
                  <p className="card-text">Price: Rs.{item.Price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllItems;
