import React, { useState } from "react";
import axios from "axios";
import "../styles/AddItems.css";

function AddItems(){


  const [Type,setType]=useState("");
  const [ItemName,setItemName]=useState("");
  const [CompanyName,setCompanyName]=useState("");
  const [Category,setCategory]=useState("");
  const [Location,setLocation]=useState("");
  const [Price,setPrice]=useState("");
  const [Description,setDescription]=useState("");
  const [Image,setImage]=useState("")

  function sendData(e){
    e.preventDefault();

    const newItem={
      Type,
      ItemName,
      CompanyName,
      Category,
      Location,
      Price,
      Description,
      Image
    }
    axios.post("http://localhost:8070/business/add",newItem).then(()=>{
      alert("Added");
      setType("");
      setItemName("");
      setCompanyName("");
      setCategory("");
      setLocation("");
      setPrice("");
      setDescription("");
      setImage("");
    }).catch((error)=>{
      console.error(error);
      alert("Error adding item. Please try again");
    })
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  }

  // if (!ItemName || !Price || !Description) {
  //   alert("Please fill in all required fields.");
  //   return;
  // }

    return(
        <form className="form-container" onSubmit={sendData}>
{/* <select class="form-select form-select-mb" aria-label="Default select example"
    onChange={(e)=>{
      setType(e.target.value);
    }}>
  <option selected>Service or Item</option>
  <option value="1">Service</option>
  <option value="2">Item</option>
</select> */}
<h3 className="h3">Add Products</h3>
<div className="mb-3 form-select-container">
  <label htmlFor="selectType" className="form-label">Select Type</label>
  <select id="selectType" className="form-select" 
    onChange={(e) => {
      setType(e.target.value);
    }}>
    <option value="" disabled selected>Select an option</option>
    <option value="1">Service</option>
    <option value="2">Item</option>
  </select>
</div>
  <div class="mb-3">
    <label for="ISName" className="form-label">Item/Service Name</label>
    <input type="text" className="form-control" id="ISname" 
    onChange={(e)=>{
      setItemName(e.target.value);
    }}/>
  </div>
  <div className="mb-3">
    <label for="Company_name" className="form-label">Company Name</label>
    <input type="text" className="form-control" id="Cname"
        onChange={(e)=>{
          setCompanyName(e.target.value);
        }}/>
  </div>
  <div className="mb-3">
    <label for="Category" className="form-label">Category</label>
    <input type="text" className="form-control" id="category"
        onChange={(e)=>{
          setCategory(e.target.value);
        }}/>
  </div>
  <div className="mb-3">
    <label for="location" className="form-label">Location</label>
    <input type="text" className="form-control" id="locatione"
        onChange={(e)=>{
          setLocation(e.target.value);
        }}/>
  </div>
  <div className="mb-3">
    <label for="price" className="form-label">Price</label>
    <input type="text" className="form-control" id="price"
        onChange={(e)=>{
          setPrice(e.target.value);
        }}/>
  </div>
  <div className="mb-3">
    <label for="description" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="description"
        onChange={(e)=>{
          setDescription(e.target.value);
        }}></textarea>
  </div>
  <div className="mb-3">
    <label for="upload_image" className="form-label">Uploade Image</label>
    <input className="form-control" type="file" id="image" accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
    />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}
export default AddItems;