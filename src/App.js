import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import SignUp from "./components/signup/SignUp";
import Submenu from "./components/subNav/submenu";
import Login from "./components/login/login";
import ConsultantRegister from "./components/ConsultantManagement/ConsultantRegister";
import ProfileView from "./components/ConsultantManagement/ProfileView";

export default function App() {
  return (
    <div>
    <Navbar/>
    <Submenu/>
    <Router>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/ConsultantRegister" element={<ConsultantRegister/>}/>
      <Route path="/ProfileView" element={<ProfileView/>}/>

      </Routes>
    </Router>
    
    </div>
  );
}

 
