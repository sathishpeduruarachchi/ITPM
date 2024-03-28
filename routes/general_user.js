const GeneralUser = require("../models/General_User");
const router = require("express").Router();

router.route("/add").post((req, res) => {
  // Extract data from request body
  const phone_No = Number(req.body.phone_No);
  const { name,education_Capacity, job_Category, work_experience, other_skils, choose_file, image } = req.body;


  // Create a new GeneralUser instance
  const newGeneralUser = new GeneralUser({
    phone_No,
    name,
    education_Capacity,
    job_Category,
    work_experience,
    other_skils,
    choose_file,
    image

  });

  // Save the new GeneralUser instance to the database
  newGeneralUser.save()
    .then(() => {
      res.json("Data is saved by the db");
    })
    .catch(error => {
      console.log(error);
      res.status(500).json("Error occurred while saving data to the database");
    });
});

router.route("/get/:id").get(async (req, res) => {
  let g_userid = req.params.id;

  try {
    const generalUser = await GeneralUser.findById(g_userid);
    if (!generalUser) {
      return res.status(404).send({ status: "User not found" });
    }
    res.status(200).send({ status: "User data fetched", generalUser: generalUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      status: "Error in getting user details",
      error: err.message,
    });
  }
});

router.route("/update/:id").put(async (req, res) => {
  let g_userid = req.params.id;

  const phone_No = Number(req.body.phone_No);
  const { name,education_Capacity, job_Category, work_experience, other_skils, choose_file, image } = req.body;

  const updateGeneral = {
    phone_No,
    name,
    education_Capacity,
    job_Category,
    work_experience,
    other_skils,
    choose_file,
    image
  };

  try {
    const updatedGeneral = await GeneralUser.findByIdAndUpdate(g_userid, updateGeneral);
    if (!updatedGeneral) {
      return res.status(404).send({ status: "User not found" });
    }
    res.status(200).send({ status: "User updated", updatedGeneral: updatedGeneral});
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: "Error with updating user information",
      error: err.message,
    });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  let g_userid = req.params.id;

  await GeneralUser.findByIdAndDelete(g_userid)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(202)
        .send({
          status: "Error with deleting the Patient",
          error: err.message,
        });
    });
});

module.exports = router;