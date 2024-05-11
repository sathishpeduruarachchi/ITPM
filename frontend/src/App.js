import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddItems from './components/AddItems';
import Navbar from "./components/navbar/navbar";
// import Submenu from './components/subNav/submenu';
import AllItems from './components/AllItems';
import ItemDetails from './components/ItemDetails';
import AllItemDashboard from './components/Dashboard/AllItemDashboard';
import ItemDetailsDashboard from './components/Dashboard/ItemDetailsDashboard';
import AddItemsDashboard from './components/Dashboard/AddItemsDashboard';
import ItemUpdate from './components/ItemUpdate';
import SignUp from './components/signup/Signup';
import Login from './components/login/login';
import UpdateItemDashboard from './components/Dashboard/UpdateItemDashboard';
import HomeDashboard from './components/Dashboard/HomeDashboard';


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        

        <Routes>
          <Route path='/add' element={<AddItemsDashboard/>}></Route>
          <Route path='/item' element={<AllItemDashboard/>}/>
          <Route path="/item/:uniqueKey" element={<ItemDetailsDashboard/>} />
          <Route path="/update/:uniqueKey" element={<UpdateItemDashboard/>}/>
          <Route path='bhome' element={<HomeDashboard/>}/>
          <Route path="/update/:uniqueKey" element={<ItemUpdate/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
