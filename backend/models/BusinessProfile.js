const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bisProfSchema = new Schema({

    CompanyName: {
        type:String
    },

    CompanyAddress:{
        type:String
    },
    
    Pno:{
        type: Number
    },

    Location:{
        type:String
    },

    Email:{
        type:String
    },

    Website:{
        Type:String
    },
    Industry:{
        type:String
    },
    Mission:{
        type:String
    },
    Description:{
        type:String
    }

})

const BisProfile = mongoose.model("BisData" , bisProfSchema);

module.exports = BisProfile;