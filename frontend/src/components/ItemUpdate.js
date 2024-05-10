
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { cloneDeep } from "lodash";
import "../styles/updateItems.css"; // Import for deep copying form data

function ItemUpdate() {
  const { uniqueKey } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [formData, setFormData] = useState({
    Type: "",
    ItemName: "",
    CompanyName: "",
    Category: "",
    Location: "",
    Price: "",
    Description: "",
    Image: "", // Initially set to an empty string
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/business/getByRef/${uniqueKey}`);
        setItem(response.data.stock);
        setFormData({
          Type: response.data.stock.Type,
          ItemName: response.data.stock.ItemName,
          CompanyName: response.data.stock.CompanyName,
          Category: response.data.stock.Category,
          Location: response.data.stock.Location,
          Price: response.data.stock.Price,
          Description: response.data.stock.Description,
          Image: response.data.stock.Image || "", // Pre-populate with existing image URL (if any)
        });
      } catch (error) {
        console.error("Error fetching item:", error);
        setError(error);
      }
    };

    fetchItem();
  }, [uniqueKey]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (imageFile) => {
    // Validate image size and format (optional)
    if (imageFile && imageFile.size > 1024 * 1024) { // 1MB limit (adjust as needed)
      setError("Image size cannot exceed 1MB.");
      return;
    }

    if (imageFile instanceof File) {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const imageUploadResponse = await axios.post("http://localhost:8070/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const uploadedImageUrl = imageUploadResponse.data.imageUrl;
        setFormData({ ...formData, Image: uploadedImageUrl }); // Update formData with uploaded URL
        console.log("Image uploaded successfully:", uploadedImageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        setError(error.message); // Handle upload errors
      }
    } else {
      // Handle other cases (e.g., no image selected)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // No need for a separate updatedImageUrl variable
      const updatedFormData = cloneDeep(formData); // Deep copy to avoid circular references

      console.log("Sending update request with data:", updatedFormData);
      const response = await axios.put(`http://localhost:8070/business/update/${uniqueKey}`, updatedFormData);
      console.log("Item updated successfully:", response.data.updatedItem);
      navigate(`/item/${uniqueKey}`);
    } catch (error) {
      console.error("Error updating item:", error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {error && <p className="error-message">Error: {error.message}</p>}
      {item ? (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="mb-3 form-select-container">
            <h3>Update Details</h3>
            <label htmlFor="selectType" className="form-label">Select Type</label>
            <select id="selectType" className="form-select" name="Type" value={formData.Type} onChange={handleChange} disabled={isSubmitting}>
              <option value="" disabled>Select an option</option>
              <option value="Service">Service</option>
              <option value="Item">Item</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ItemName" className="form-label">Item Name</label>
            <input type="text" className="form-control" name="ItemName" value={formData.ItemName} onChange={handleChange} disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label htmlFor="CompanyName" className="form-label">Company Name</label>
            <input type="text" className="form-control" name="CompanyName" value={formData.CompanyName} onChange={handleChange} disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label htmlFor="Category" className="form-label">Category</label>
            <input type="text" className="form-control" name="Category" value={formData.Category} onChange={handleChange} disabled={isSubmitting}/>
          </div>
          <div className="form-group">
            <label htmlFor="Price" className="form-label">Price</label>
            <input type="text" className="form-control" name="Price" value={formData.Price} onChange={handleChange}  disabled={isSubmitting}/>
          </div>
          <div className="form-group">
            <label htmlFor="Description" className="form-label">Description</label>
            <textarea name="Description" className="form-control" value={formData.Description} onChange={handleChange} disabled={isSubmitting}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="Image" className="form-label">Image</label>
            <input type="file" className="form-control" name="Image" accept="image/*" onChange={handleImageChange} disabled={isSubmitting} />
          </div>
          <button type="submit"  className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update Item"}
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ItemUpdate;


