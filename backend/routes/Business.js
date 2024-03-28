const router = require("express").Router();
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

//update
router.route("/update/:uniqueKey").put(async(req,res)=>{
    let uniqueKey =req.params.uniqueKey;

    const {
        Type,
        ItemName,
        CompanyName,
        Category,
        Location,
        Price,
        Description,
        Image
    }= req.body;

    const updateItem = {
        Type,
        ItemName,
        CompanyName,
        Category,
        Location,
        Price,
        Description,
        Image
    };
    try {
        const updatedItem = await Business.findOneAndUpdate( //findOneAndUpdate
        { uniqueKey: uniqueKey }, // Use ReferenceNo for matching
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
})

//delete
router.route("/delete/:uniqueKey").delete(async(req,res)=>{
    let userId = req.params.uniqueKey;

    await Business.findOneAndDelete(userId)
    .then(()=>{
        res.status(200).send({staus:"Deleted Successfully"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting", error:err.message});
    })
})

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

module.exports = router;