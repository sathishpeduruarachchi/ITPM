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

  const [typeError, setTypeError] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  //validations
  const validateType = (value) =>{
    if(!value){
      setTypeError("Type is Required");
      return false;
    }else{
      setTypeError("");
      return true;
    }
  }

  const validateProductName = (value)=>{
    if(!value){
      setProductNameError("Product Name is Required");
      return false;
    }else{
      setProductNameError("");
      return true;
    }
  }

  const validateCompanyName = (value)=>{
    if(!value){
      setCompanyNameError("Company Name is Required");
      return false;
    }else{
      setCompanyNameError("");
      return true;
    }
  }

  const validateCategory = (value)=>{
    if(!value){
      setCategoryError("Category is Required");
      return false;
    }else{
      setCategoryError("");
      return true;
    }
  }

  function sendData(e){
    e.preventDefault();

    const isTypeValid = validateType(Type);
    const isProductNameValid = validateProductName(ItemName);
    const isCompanyNameValid = validateCompanyName(CompanyName);
    const isCategoryValid = validateCategory(Category);

    if(isTypeValid && isProductNameValid && isCompanyNameValid && isCategoryValid){

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
        window.location.href = "/item";
  
        setType("");
        setItemName("");
        setCompanyName("");
        setCategory("");
        setLocation("");
        setPrice("");
        setDescription("");
        
      }).catch((error)=>{
        console.error(error);
        alert("Error adding item. Please try again");
      })
    }

    }


  
  function handleFileChange(e) {
    setImage(e.target.files[0]);
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

    <h3 className="h3">Add Products</h3>
    <div className="mb-3 form-select-container">
  <label htmlFor="selectType" className="form-label">Select Type</label>
  <select id="selectType" className="form-select" required
    onChange={(e) => {
      setType(e.target.value);
      setTypeError(e.target.value);
    }}>
    <option value="" disabled selected>Select an option</option>
    <option value="1">Service</option>
    <option value="2">Item</option>
  </select>
  {typeError && <p className="error-message">{typeError}</p>}
</div>

  <div class="mb-3">
    <label for="ISName" className="form-label">Item/Service Name</label>
    <input type="text" className="form-control" id="ISname" required
    onChange={(e)=>{
      setItemName(e.target.value);
      validateProductName(e.target.value);
    }}/>
    {productNameError && <p className="text-danger">{productNameError}</p>}
  </div>

  <div className="mb-3">
    <label for="Company_name" className="form-label">Company Name</label>
    <input type="text" className="form-control" id="Cname" required
        onChange={(e)=>{
          setCompanyName(e.target.value);
          validateCompanyName(e.target.value);
        }}/>
        {companyNameError && <p className="text-danger">{companyNameError}</p>}
  </div>

  <div className="mb-3 form-select-container">
  <label htmlFor="selectCategory" className="form-label">Select Category</label>
  <select id="selectCategory" className="form-select" required
    onChange={(e) => {
      setCategory(e.target.value);
      validateCategory(e.target.value);
    }}>
    <option value="" disabled selected>Select an option</option>
    <option value="1">Electronics & Accessories</option>
    <option value="2">Fashion</option>
    <option value="3">Home and Living</option>
    <option value="4">Health & Beauty</option>
    <option value="5">Books & Media</option>
    <option value="6">Food</option>
    <option value="7">Sports</option>
    <option value="8">Services</option>
    <option value="9">Other</option>
  </select>
</div>
    {categoryError && <p className="text-danger">{categoryError}</p>}
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