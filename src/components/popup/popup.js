import React, { useState } from "react";


const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleNavClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li className="nav-element" onClick={() => handleNavClick("General User")}>General User</li>
        <li className="nav-element" onClick={() => handleNavClick("Employee")}>Employee</li>
        <li className="nav-element" onClick={() => handleNavClick("Business")}>Business</li>
        <li className="nav-element" onClick={() => handleNavClick("Consultant")}>Consultant</li>
      </ul>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>×</span>
            <p>{popupContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
