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

router.get("/", async (req, res) => {
    const userId = req.user.id; // Assuming you have user authentication middleware
  
    try {
      const profile = await BisProfile.findOne({ userId });
  
      if (!profile) {
        return res.status(404).json({ message: "Business profile not found" });
      }
  
      res.status(200).json({ profile });
    } catch (error) {
      console.error("Error fetching business profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Update business profile details for the logged-in user
  router.put("/", async (req, res) => {
    const userId = req.user.id; // Assuming you have user authentication middleware
    const updatedProfile = req.body;
  
    try {
      const profile = await BisProfile.findOneAndUpdate(
        { userId },
        updatedProfile,
        { new: true, upsert: true }
      );
  
      res.status(200).json({ profile });
    } catch (error) {
      console.error("Error updating business profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  


module.exports = router;