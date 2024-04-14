import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const[input, setinput] = useState({
    name: "",
    email:""

  })

  const navigate = useNavigate(); // to navigate the value to login

  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input))
    navigate("/")
  }
  return (
    <>
      <div className="app flex">
        <div className="card">
          <h1 className="flex">Create Account</h1>
          <form className="form-class" onSubmit={handleSubmit}>
            <label>Your name</label>
            <input name="name" value={input.name} 
            onChange={(e) => 
              setinput({...input, [e.target.name]: e.target.value})} 
            type="text" placeholder="First and Last Name" className="input-class" required />

           

            <label>Email</label>
            <input type="email" placeholder="Enter User Email" className="input-class"  name="email" value={input.email} 
            onChange={(e) => 
              setinput({...input, [e.target.name]: e.target.value})}
            required />

            <button type="submit" className="button-class">Continue</button>

            <Link to="/" className="toggle-link" >
              Already have an account? Click to Login
            </Link>

          </form>
        </div>
      </div>
    </>
  )
}
