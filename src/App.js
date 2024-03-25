import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import SignUp from "./components/signup/SignUp";
import Submenu from "./components/subNav/submenu";


export default function App() {
  return (
    <div>
    <Navbar/>
    <Submenu/>
    <Router>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    
    </div>
  );
}

 
