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

module.exports = router;
