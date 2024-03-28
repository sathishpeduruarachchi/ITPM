const mongoose = require("mongoose");
const schema = mongoose.Schema;

const generalUserSchema = new schema ({

    name:{
        type:String,
        required:true
    },
    phone_No:{
        type:Number,
        required:true
    },
    education_Capacity:{
        type:String,
        required:true
    },
    job_Category:{
        type:String,
        required:true
    },
    work_experience: {
        type: String, 
        required: true
    },
    other_skils: {
        type:String,
        required:true
    },
   
    choose_file:{
        type:String,
        required:false
    },
    
    image:{
        type:String,
        required:false
    },

})

const GeneralUser = mongoose.model("GeneralUser", generalUserSchema);
module.exports = GeneralUser;