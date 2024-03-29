import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import SignUp from "./components/signup/SignUp";
import Submenu from "./components/subNav/submenu";
import Login from "./components/login/login";
import ConsultantRegister from "./components/ConsultantManagement/ConsultantRegister";
import ProfileView from "./components/ConsultantManagement/ProfileView";
import RecipeReviewCard from "./components/ConsultantManagement/post"
import Advertising from "./components/ConsultantManagement/advertising"
import CreatePostForm from "./components/ConsultantManagement/createform";
import Createpost from "./components/ConsultantManagement/createpost";

export default function App() {
  return (
    <div>
      <div style={{ marginTop: '120px' }}>
        <Navbar />

      </div>
      {/* <Submenu/> */}
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ConsultantRegister" element={<ConsultantRegister />} />
          <Route path="/ProfileView" element={<ProfileView />} />
          <Route path="/RecipeReviewCard" element={<RecipeReviewCard />} />
          <Route path="/Advertising" element={<Advertising />} />
          <Route path="/CreatePostForm" element={<CreatePostForm />} />
          <Route path="/Createpost" element={<Createpost />} />
        </Routes>
      </Router>

    </div>
  );
}


