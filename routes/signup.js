const Signup = require("../models/Signup");
const router = require("express").Router();

router.route("/add").post((req, res) => {
  // Extract data from request body
  const { firstName, lastName, email, dateOfBirth, gender, password, confirmPassword } = req.body;

  // Backend validation for password and confirmPassword
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters long" });
  }
  // You can add more validation rules for the password and confirmPassword fields if needed

  // Create a new Signup instance
  const newSignup = new Signup({
    firstName,
    lastName,
    email,
    dateOfBirth,
    gender,
    password,
    confirmPassword
  });

  // Save the new Signup instance to the database
  newSignup.save()
    .then(() => {
      res.json("Data is saved by the db");
    })
    .catch(error => {
      console.log(error);
      res.status(500).json("Error occurred while saving data to the database");
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userid = req.params.id;

  try {
    const signup = await Signup.findById(userid);
    if (!signup) {
      return res.status(404).send({ status: "User not found" });
    }
    res.status(200).send({ status: "User data fetched", signup: signup });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      status: "Error in getting user details",
      error: err.message,
    });
  }
});

router.route("/update/:id").put(async (req, res) => {
  let userid = req.params.id;

  const { firstName, lastName, email, dateOfBirth, gender, password, confirmPassword } = req.body;

  const updateSignup = {
    firstName,
    lastName,
    email,
    dateOfBirth,
    gender,
    password,
    confirmPassword
  };

  try {
    const updatedUser = await Signup.findByIdAndUpdate(userid, updateSignup);
    if (!updatedUser) {
      return res.status(404).send({ status: "User not found" });
    }
    res.status(200).send({ status: "User updated", updatedUser: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: "Error with updating user information",
      error: err.message,
    });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  let userid = req.params.id;

  await Signup.findByIdAndDelete(userid)
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
