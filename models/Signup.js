const mongoose = require("mongoose");

const schema = mongoose.Schema;



const signupSchema = new schema ({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dateOfBirth: {
        type: String, 
        required: true
    },
    gender: {
        type:String,
        required:true
    },
   
    password:{
        type:String,
        required:false
    },
    
    confirmPassword:{
        type:String,
        required:false
    },
   
    

})




const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
