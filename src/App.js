import React from "react";
import './App.css';
import Loginpage from './components/Loginpage';
import Signup from './components/Signup';
//import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";




function App() {
  

  return (
    <>
      <div>
          
            <Routes>
              <Route path="/login" element={<Loginpage />} />
              <Route path="/login/signup" element={<Signup />} />
              <Route path="/" element={<Home/>}/>
              <Route path="/watchlist" element={<Watchlist/>} />
            </Routes>
          </div>
        
      
      
    </>
  );
}

export default App;
