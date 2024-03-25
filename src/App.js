import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import SignUp from "./components/signup/SignUp";
import Submenu from "./components/subNav/submenu";
import Login from "./components/login/login";

export default function App() {
  return (
    <div>
    <Navbar/>
    <Submenu/>
    <Router>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

 
