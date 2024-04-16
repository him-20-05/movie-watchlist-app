import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const navigate = useNavigate(); 

  const handleSubmit = (e) =>{
    e.preventDefault();
    let signupObj = {name, email}
    console.log('res:',signupObj)
   
     navigate("/login")

    fetch("http://localhost:8000/user",{
      method:"POST",
      headers:{'content-type': 'application/json'},
      body:JSON.stringify(signupObj)
    }).then((res)=>{
      toast.success('Registered Successfully')
    }).catch((err)=>{
      toast.error('Failed :'+err.message)
    })
  }
  return (
    <>
      <div className="app flex">
        <div className="card">
          <h1 className="flex">Create Account</h1>
          <form className="form-class" onSubmit={handleSubmit}>
            <label>Your name</label>
            <input name="name" value={name} 
            onChange={(e) => 
              setName(e.target.value)} 
            type="text" placeholder="First and Last Name" className="input-class" required />

           

            <label>Email</label>
            <input type="email" placeholder="Enter User Email" className="input-class"  name="email" value={email} 
            onChange={(e) => 
              setEmail(e.target.value)}
            required />

            <button type="submit" className="button-class">Continue</button>

            <Link to="/login" className="toggle-link" >
              Already have an account? Click to Login
            </Link>

          </form>
        </div>
      </div>
    </>
  )
}
