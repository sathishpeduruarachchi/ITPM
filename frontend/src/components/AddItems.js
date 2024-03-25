import React from "react";

function AddItems(){
    return(
        <form>
<select class="form-select" aria-label="Default select example">
  <option selected>Service or Item</option>
  <option value="1">Service</option>
  <option value="2">Item</option>
</select>
  <div class="mb-3">
    <label for="ISName" class="form-label">Item/Service Name</label>
    <input type="text" class="form-control" id="ISname"></input>
  </div>
  <div class="mb-3">
    <label for="Company_name" class="form-label">Company Name</label>
    <input type="text" class="form-control" id="Cname"></input>
  </div>
  <div class="mb-3">
    <label for="Category" class="form-label">Category</label>
    <input type="text" class="form-control" id="category"></input>
  </div>
  <div class="mb-3">
    <label for="location" class="form-label">Location</label>
    <input type="text" class="form-control" id="locatione"></input>
  </div>
  <div class="mb-3">
    <label for="price" class="form-label">Price</label>
    <input type="text" class="form-control" id="price"></input>
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <textarea type="text" class="form-control" id="description"></textarea>
  </div>
  <div class="mb-3">
    <label for="upload_image" class="form-label">Uploade Image</label>
    <input class="form-control" type="file" id="image" accept=".jpg, .jpeg, .png"></input>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    )
}
export default AddItems;