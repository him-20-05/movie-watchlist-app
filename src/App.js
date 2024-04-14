import React, { useState } from "react";
import './App.css';
import Loginpage from './components/Loginpage';
import Signup from './components/Signup';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";




function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage);
  };

  return (
    <>
      <div className="App">
          <div className="login-page-overlay">
            <Routes>
              <Route path="login" element={<Loginpage />} />
              <Route path="signup" element={<Signup />} />
              <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
        
      </div>
      
    </>
  );
}

export default App;
