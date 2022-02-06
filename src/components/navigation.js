import React, { useState } from "react";
import profile_avatar from "../assets/profile_avatar.svg";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  const [navLinks, setNavLinks] = useState([
    { path: "/", label: "Home", isActive: true },
    { path: "/blog", label: "Blog", isActive: false },
    { path: "/work", label: "Our Work", isActive: false },
    { path: "/about", label: "About", isActive: false },
  ]);

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Logged out");
  };
  return (
    <header>
      <nav>
        <div className="brand">
          <Link to="/">
            <h3>Feyton Inc</h3>
          </Link>
        </div>
        <div className="menu-toggle mobile">
          <div className="toggle">
            <i className="fa fa-bars"></i>
          </div>
        </div>
        <div className="menu flex-row menu-displayed">
          <ul className="menu-items flex-row">
            <li className="menu-item active menu-home">
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "none")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "none")}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "none")}
                to="/work"
              >
                Our Work
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "none")}
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="menu-item profile-img">
              <a href="#here">
                <img src={profile_avatar} alt="" className="picture-avatar" />
                <i className="fa fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item profile-img logged-in">
              <a href="#here">
                <img src={profile_avatar} alt="" className="profile-picture" />
                <i className="fa fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <a
                    href="#logout"
                    className="logout"
                    onClick={(e) => {
                      handleLogout(e);
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
