import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Register-section/Login";
const TopNav = () => {
  const [popup,setPopup] = useState(false)
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg">
           {popup && <Login popup={popup} setPopup={setPopup}/>}
        <div className="container-fluid">
          <div className="left logo navbar-brand">
            <img
              src="https://cdnhost.akashbd.net/assets/images/akash-logo-blue.svg?v=7.0.5"
              alt="logo"
            />
          </div>
          <button
            className="navbar-toggler menu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu"></i>
          </button>
          <div
            className="collapse navbar-collapse right"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex custom-nav" role="search">
              <ul className="top-ul">
                <li>
                  <button className="fixed">Get New Connection</button>
                </li>
                <li>
                  <button className="manual">Quick Recharge</button>
                </li>
                <li>
                  <div className="">
                    <select>
                      <option selected>Select Language</option>
                      <option value="Bangla">Bangla</option>
                      <option value="ENGLISH">ENGLISH</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="icon show">
                    <i className="bx bxs-user text-white"></i>
                    <div className="log-items">
                      <ul className="Register-section">
                        <li  onClick={() => setPopup(true)}>Login</li>
                        <li>SignIn</li>
                        <Link to={'/profile'} className="nav-item">
                        <li>Profile</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bxs-bell text-white"></i>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
