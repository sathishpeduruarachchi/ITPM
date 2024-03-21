import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Subnav from "./components/subNav/subnav";


//Consultant imports
import Signup from "./pages/consultant/Signup";
import Login from './pages/consultant/Login';




export default class App extends Component {

  render() {

    return (

      <BrowserRouter>

        <Navbar />
        <Subnav />

        <div className="">
          <Routes>
            
            {/*Consultant Routes */}
            <Route path='/signup' Component={Signup}></Route>
            <Route path='/login' Component={Login}></Route>


          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
