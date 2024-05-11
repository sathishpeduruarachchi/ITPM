import React, { useState, useEffect } from "react";
import axios from "axios";

const BusinessProfile = () => {
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    CompanyName: "",
    CompanyAddress: "",
    Pno: "",
    Location: "",
    Email: "",
    Website: "",
    Industry: "",
    Mission: "",
    Description: ""
  });

  useEffect(() => {
    fetchBusinessProfile();
  }, []);

  const fetchBusinessProfile = async () => {
    try {
      const response = await axios.get("http://localhost:8070/business/profile");
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching business profile:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateProfile = async () => {
    try {
      await axios.put("http://localhost:8070/business/update", formData);
      setEditing(false);
      fetchBusinessProfile();
    } catch (error) {
      console.error("Error updating business profile:", error);
    }
  };

  const renderProfileFields = () => {
    const { CompanyName, CompanyAddress, Pno, Location, Email, Website, Industry, Mission, Description } = profile;

    if (editing) {
      return (
        <div>
          <input type="text" name="CompanyName" value={formData.CompanyName} onChange={handleInputChange} />
          {/* Render other input fields similarly */}
          <button onClick={handleUpdateProfile}>Save</button>
        </div>
      );
    }

    return (
      <div>
        <p>Company Name: {CompanyName}</p>
        <p>Company Address: {CompanyAddress}</p>
        <p>Telephone No:{Pno}</p>
        <p>Location:{Location}</p>
        <p>Email:{Email}</p>
        <p>Website:{Website}</p>
        <p>Industry:{Industry}</p>
        <p>Mission:{Mission}</p>
        <p>Description:{Description}</p>
        
        <button onClick={() => setEditing(true)}>Edit Profile</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Business Profile</h1>
      {renderProfileFields()}
    </div>
  );
};

export default BusinessProfile;
