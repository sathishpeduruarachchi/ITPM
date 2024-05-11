import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/AllItems.css";
import SideBar from "./sidebar/Sidebar";
import { FaPlus } from 'react-icons/fa'; 

function AllItems() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedItems, setSortedItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8070/business")
      .then((response) => {
        const itemsData = response.data;
        setItems(itemsData);
        setSortedItems([...itemsData]); // Set sorted items initially
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value === '') {
      setSuggestions([]);
    } else {
      const filteredItems = sortedItems.filter((item) =>
        item.ItemName.toLowerCase().includes(value.toLowerCase())
      );

      const uniqueSuggestions = Array.from(new Set(filteredItems.map((item) => item.ItemName)));
      setSuggestions(uniqueSuggestions);
    }
  };

  const handleSearch = async () => {
    try {
      console.log("Search Query:", searchQuery);
      const response = await axios.get(`http://localhost:8070/business/search?q=${searchQuery}`);
      const items = [...response.data.items];
      items.sort((a, b) => a.ItemName.localeCompare(b.ItemName));
      setSortedItems(items);
    } catch (error) {
      console.error("Search Error:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const filteredItems = items.filter((item) => item.ItemName.toLowerCase() === suggestion.toLowerCase());
    setSortedItems(filteredItems);
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="container-a">
      <div className="top-right-button">
        <Link to="/add" className="btn btn-primary">Add Item</Link>
      </div>
      <h2>All Items</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {suggestions.length > 0 && (
        <div className="suggestions">
          <ul className="list-group">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item clickable"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="row row-cols-3 g-4">
        {sortedItems.map((item) => (
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
