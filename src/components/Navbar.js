import React from "react";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const isLoggedIn = localStorage.getItem("loggedIn");
  const userNameData = localStorage.getItem("user");
  const userName = userNameData ? JSON.parse(userNameData).name : null;
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user information from localStorage
    localStorage.removeItem("loggedIn");
   
    navigate("/")
  };

  const handleUserLoginClick = () => {
    navigate("/login");
  };
  const handleHome = ()=>{
    navigate("/")
  };

  return (
    <div className="sidebar">
      <ul className="SidebarList">
        <li className="row">
          <h4 className="text-danger">Watchlists</h4>
        </li>
        <li className="row">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <CiSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-describedby="basic-addon1"
            />
          </div>
        </li>
        
        <li className="mt-2 row">
          <button type="button" className="btn btn-danger" onClick={handleHome}>
            <IoHomeOutline style={{ marginRight: "5px" }} />
            Home
          </button>
        </li>

        <li className="mt-2 row1">My lists</li>
        <li className="row2">
          <span className="circle-user">
            <div className="user-icon-container">
              {isLoggedIn ? (
                <>
                  <span className="user-name"><FaRegCircleUser style={{ fontSize: "20px" }} />{userName}</span>
                  <button type="button" className="btn btn-danger m-2" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button type="button" className="btn btn-light" onClick={handleUserLoginClick}>
                  <FaRegCircleUser style={{ fontSize: "24px" }} /> User Login
                </button>
              )}
            </div>
          </span>
        </li>
      </ul>
    </div>
  );
}
