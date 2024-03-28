const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;

const bisSchema = new Schema({
    uniqueKey: {
        type: String,
        default: uuidv4,
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
    }
})

const Business = mongoose.model("BisItem",bisSchema);

module.exports =Business;