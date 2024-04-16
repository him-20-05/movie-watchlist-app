import React from "react";
import Loginpage from "./pages/Loginpage";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        theme="colored"
        className="d-flex justify-content-center align-items-center"
      />

      <div>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

