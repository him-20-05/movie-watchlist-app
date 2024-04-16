import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/user?email=" + email)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((users) => {
        console.log("Users:", users); 
        const user = users.find((u) => u.email === email); 
        console.log("User:", user); 
        if (user) {
          console.log("User ID:", user.id); 
          localStorage.setItem("loggedIn", true); 
          localStorage.setItem("userId", user.id); 
          localStorage.setItem("user", JSON.stringify(user));
          if (!localStorage.getItem("watchlist")) {
            localStorage.setItem("watchlist", JSON.stringify([]));
          }
          navigate("/");
          toast.success('Login successful');
        } else {
          toast.error('Please enter valid email');
        }
      })
      .catch((err) => {
        toast.error('Login failed due to: ' + err.message);
      });
  };
  

  return (
    <div className="app flex">
      <div className="card">
        <h1 className="flex">Login</h1>
        <form className="form-class" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter User Email"
            className="input-class"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            required
          />
          {error && <h6 className="text-danger mb-3 d-flex">{error}</h6>}
          <button type="submit" className="button-class">
            Login
          </button>
          <Link to="/signup" className="toggle-link">
            Don't have an account? Click to Sign-up
          </Link>
        </form>
      </div>
    </div>
  );
}
