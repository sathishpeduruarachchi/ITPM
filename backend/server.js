const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

require("dotenv").config();


const app = express();

const PORT= process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const URL = process.env.MONGO_URL;

mongoose.connect(URL,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Modgodb conection sucess!");
})



const businessRouter = require("./routes/Business.js");
app.use("/business",businessRouter);

const bisProfileRouter = require("./routes/BisProfile.js");
app.use("/bisprofile" , bisProfileRouter);

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port: ${PORT}`)
})