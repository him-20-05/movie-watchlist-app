import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Loginpage() {
  const[input, setinput] = useState({
    email:""

  })
 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    
    // Check if loggedUser is not null
    if (loggedUser && input.email === loggedUser.email) {
      localStorage.setItem('loggedIn', true);
      navigate("/");
    } else {
      alert("Wrong email id");
      setinput({ email: "" });
    }
  }
  
  return (
    <>
      <div className="app flex">
        <div className="card">
          <h1 className="flex">Login</h1>

          <form className="form-class" onSubmit={handleLogin}>
            <label>Email</label>
            <input type="email" placeholder="Enter User Email" className="input-class"  name="email" value={input.email} 
            onChange={(e) => 
              setinput({...input, [e.target.name]: e.target.value})}
            required />

            <button type="submit" className="button-class" >
              Login
            </button>
            <Link to="/login/signup" className="toggle-link">
              Don't have an account? Click to Sign-up
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
