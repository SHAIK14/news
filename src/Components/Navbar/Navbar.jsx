import React from "react";
import "./Navbar.css";
import Cricket from "../pages/Cricket";
import Finance from "../pages/Finance";
import Politics from "../pages/Politics";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="" alt="" />
        <Link to="/" className="link">
          <h1>infohive</h1>
        </Link>
      </div>
      <div className="middle">
        <Link to="/cricket" className="link">
          <Cricket />
        </Link>
        <Link to="/finance" className="link">
          <Finance />
        </Link>
        <Link to="/politics" className="link">
          <Politics />
        </Link>
      </div>
      <div className="search">
        <input
          className="searchbar"
          type="search"
          placeholder="searchnews
        "
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
