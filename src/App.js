import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import SignUp from "./components/signup/SignUp";
//import Submenu from "./components/subNav/submenu";
import Login from "./components/login/login";
import Home from "./components/home/home";

export default function App() {
  return (
    <>
    <div>

    <Navbar />
        {/* <Submenu/> */}

    </div><div>
        
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>

      </div></>
  );
}

 
