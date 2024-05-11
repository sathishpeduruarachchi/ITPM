const router = require("express").Router();
let BisProfile = require("../models/BusinessProfile");

//add
router.route("/add").post((req,res)=>{
    const {
        CompanyName,
        CompanyAddress,
        Pno,
        Location,
        Email,
        Website,
        Industry,
        Mission,
        Description
    } = req.body;

    const newBisProfile = new BisProfile({
        
        CompanyName,
        CompanyAddress,
        Pno,
        Location,
        Email,
        Website,
        Industry,
        Mission,
        Description,
    });

    newBisProfile.save().then(()=>{
        res.json("Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//fetch
router.route("/").get((req,res)=>{
    BisProfile.find().then((items)=>{
        res.json(items)
    }).catch((e)=>{
        console.log(e)
    })
})


module.exports = router;