const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const bisSchema = new Schema({
    uniqueKey: {
        type: String,
        default:  function() { // Use a function to generate the default value
            return Math.floor(10000 + Math.random() * 90000).toString(); // Generate a 5-digit random number and convert it to string
        },
        unique: true 
    },
    Type:{
        type:String
    },
    ItemName:{
        type : String,
        required : true
    },
    CompanyName:{
        type: String
        
    },
    Category:{
        type: String
    },
    Location:{
        type:String
    },
    Price:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Image:{
        type:String
    },
    ratings: [{ type: Number }]
})

const Business = mongoose.model("BisItem",bisSchema);

module.exports =Business;