import React from "react";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleLoginPage }) {

  const isLoggedIn = localStorage.getItem("loggedIn");
  const userNameData = localStorage.getItem("user");
  const userName = userNameData ? JSON.parse(userNameData).name : null;
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user information from localStorage
    localStorage.removeItem("loggedIn");
   
    navigate("/")
  };

  return (
    <div className="sidebar">
      <ul className="SidebarList">
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
          <button type="button" className="btn btn-danger">
            <IoHomeOutline style={{ marginRight: "5px" }} />
            Home
          </button>
        </li>

        <li className="mt-2 row1">My lists</li>
        <li className="row2" onClick={toggleLoginPage}>
          <span className="circle-user">
            <div className="user-icon-container">
              <button type="button" className="btn btn-light">
                <FaRegCircleUser style={{ fontSize: "24px" }} /> {isLoggedIn ? userName || "Guest" : "Guest"}
              </button>
              {isLoggedIn && (
                <button type="button" className="btn btn-danger ml-2" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>
          </span>
        </li>
      </ul>
    </div>
  );
}
