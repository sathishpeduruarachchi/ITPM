const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const port= process.env.port || 8070;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log(`Server is up and running on port: ${port}`)
})