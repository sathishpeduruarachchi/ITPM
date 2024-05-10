const router = require("express").Router();
// const sharp = require('sharp');
const multer = require("multer");
const fs = require("fs");
const path = require("path");
let Business = require("../models/BusinessItems");







//add
router.route("/add").post((req,res)=>{
    const Type= req.body.Type;
    const ItemName = req.body.ItemName;
    const CompanyName = req.body.CompanyName;
    const Category= req.body.Category;
    const Location=req.body.Location;
    const Price=req.body.Price;
    const Description=req.body.Description;
    const Image=req.body.Image

    const newBusiness = new Business({
        Type,
        ItemName,
        CompanyName,
        Category,
        Location,
        Price,
        Description,
        Image
    })

    newBusiness.save().then(()=>{
        res.json("Added")
    }).catch((err)=>{
        console.log(err);
    })
})

// //fetch
router.route("/").get((req,res)=>{
    Business.find().then((items)=>{
        res.json(items)
    }).catch((e)=>{
        console.log(e)
    })
})



// Update route with image upload handling and debugging logs
router.route("/update/:uniqueKey").put(async (req, res) => {
  try {
    const uniqueKey = req.params.uniqueKey;

    const {
      Type,
      ItemName,
      CompanyName,
      Category,
      Location,
      Price,
      Description,
    } = req.body;

    let Image = "";

    const file = req.file;

    console.log("Uploaded file:", req.file); // Log uploaded file information (for debugging)

    // Check if an image was uploaded
    if (file) {
      // Construct the URL of the uploaded image
      Image = req.protocol + "://" + req.get("host") + "/uploads/" + file.filename;
      console.log("Constructed Image URL:", Image); // Log constructed URL (for debugging)
    }

    const updateItem = {
      Type,
      ItemName,
      CompanyName,
      Category,
      Location,
      Price,
      Description,
      Image,
    };

    const updatedItem = await Business.findOneAndUpdate( // Replace 'Business' with your model name
      { uniqueKey: uniqueKey },
      updateItem,
      { new: true } // To return the updated document
    );

    if (!updatedItem) {
      return res.status(404).send({ status: "Item not found" });
    }

    console.log("Item updated successfully:", updatedItem);
    res.status(200).send({ status: "updated successfully", updatedItem });
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).send({ status: "update error" });
  }
});

// //delete
// router.route("/delete/:uniqueKey").delete(async(req,res)=>{
//     let userId = req.params.uniqueKey;

//     await Business.findOneAndDelete(userId)
//     .then(()=>{
//         res.status(200).send({staus:"Deleted Successfully"});
//     }).catch((err)=>{
//         console.log(err.message);
//         res.status(500).send({status:"Error with deleting", error:err.message});
//     })
// })

//delete
router.delete("/delete/:uniqueKey", async (req, res) => {
  try {
      const uniqueKey = req.params.uniqueKey;

      // Find the item by its unique key and delete it
      const deletedItem = await Business.findOneAndDelete({ uniqueKey: uniqueKey });

      if (!deletedItem) {
          return res.status(404).send({ status: "Item not found" });
      }

      console.log("Item deleted successfully:", deletedItem);
      res.status(200).send({ status: "Deleted successfully" });
  } catch (error) {
      console.error("Error deleting item:", error);
      res.status(500).send({ status: "Error with deleting", error: error.message });
  }
});

//get a one item details
router.route("/getByRef/:uniqueKey").get(async(req,res)=>{
    let uniqueKey=req.params.uniqueKey;
    await Business.findOne({uniqueKey: uniqueKey}).then((stock)=>{
        res.status(200).send({status:"Item fetched",stock})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get Item"});
    })
})

// Express route to handle rating submission
// router.post('/items/:itemId/rate', async (req, res) => {
//     try {
//       const { itemId } = req.params;
//       const { rating } = req.body;
  
//       const item = await Item.findById(itemId);
//       if (!item) {
//         return res.status(404).json({ message: 'Item not found' });
//       }
  
//       item.ratings.push(rating);
//       await item.save();
  
//       res.status(201).json({ message: 'Rating submitted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  

// //Add endpoint to serve resized images
// router.get("/images/:imageName", (req, res) => {
//     const imageName = req.params.imageName;
//     const width = parseInt(req.query.width); // Get requested width from query parameter
  
//     // Read the original image and resize it
//     sharp(`path/to/images/${imageName}`)
//       .resize({ width }) // Resize based on requested width
//       .toBuffer()
//       .then((data) => {
//         res.set('Content-Type', 'image/jpeg');
//         res.send(data); // Send resized image as response
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(500).send('Error resizing image');
//       });
//   });

module.exports = router;