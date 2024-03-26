//import react
import React,{useState, useEffect} from "react";
import '../../styles/consult.css';


import Logo from '../../images/logo.png';

export default function ConsultantRegister(){

  


  return (
    <div> <br></br>
    <div className="container">
      <div className="row">
      <div className="col-md-6 reg-side-bar">
        <a><img src={Logo} className="mixnetlogo"/></a><br></br>
        <h1 className="logoName">Name</h1>
      </div>


      {/* Right side with HTML form */}
      <div className="col-md-6 right-side-con">
        <form className="form-con" >
          <div className="registerTopic-con">
            <center>Consultant Registration</center>
          </div>
          <div className="subTopic-con">
            <center>Personal Information</center>
          </div>
          <hr className='hrLine-con'></hr>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Username
            </label>
            <input
              className="input-con" id="username" type="text" placeholder="Username" required
              
            />
          </div>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Address
            </label>
            <input
              className="input-con" id="username" type="textarea" placeholder="address" required
              
            />
          </div>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Age
            </label>
            <input
              className="input-con" id="username" type="number" placeholder="Age" required
              
            />
          </div>

          
          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Email
            </label>
            <input
              className="input-con" id="username" type="text" placeholder="email"
              
            />
          </div>
          
          {/*new part              new part             new part*/ }
          <div className="image-upload-container">
      
    </div>

          
          
          <div className="button-group-con">
            <button className="Regbutton-con" >
              Create Profile
            </button>
          </div>

        </form>
      </div>
    </div>
    </div>
    </div>
  );
};
