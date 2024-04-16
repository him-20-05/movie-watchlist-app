import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const userNameData = localStorage.getItem("user");
  const userName = userNameData ? JSON.parse(userNameData).name : null;
  const navigate = useNavigate();

  const clearWatchlist = () => {
    localStorage.removeItem("watchlist");
  };
  
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    clearWatchlist();
    navigate("/")
  };
  

  const handleUserLoginClick = () => {
    navigate("/login");
  };
  const handleHome = ()=>{
    navigate("/")
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <h1 className="navbar-brand m-2 text-light">Movie App</h1>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <button type="button" className="btn btn-outline-danger m-2" onClick={handleHome}>
            <IoHomeOutline style={{ marginRight: "5px" }} />
            Home
          </button>
        </li>
        <li className="nav-item">
        <span className=" text-light ">
            <div className=" text-light">
              {isLoggedIn ? (
                <>
                  <span className="user-name m-2 border border-light border-2 p-2 rounded"><FaRegCircleUser style={{ fontSize: "20px" }} />{userName}</span>
                  <button type="button" className="btn btn-outline-danger m-2" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button type="button" className="btn btn-outline-light m-2" onClick={handleUserLoginClick}>
                  <FaRegCircleUser  style={{ fontSize: "20px" }} /> User Login
                </button>
              )}
            </div>
          </span>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
