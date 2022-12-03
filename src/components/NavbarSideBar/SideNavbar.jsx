import React from "react";
import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Adherents from "../Dashboard/Dashboard.Adherents";
import Authors from "../Dashboard/Dashboard.Authors";
import Books from "../Dashboard/Dashboard.Books";
import Category from "../Dashboard/Dashboard.Category";
import Statistic from "../Dashboard/Dashboard.Statistic";

const SideNavbar = () => {
  const styles = {
    popupTrue: {
      width: "100vw",
      left: "0vw",
    },
    popupFalse: {
      "@media only screen and (max-width: 868px) and (min-width:200px)": {
        width: "0vw",
        left: "-16px",
      },
    },
  };
  const [toggleSide, setToggleSide] = useState(false);
  return (
    <>
      <div className="admin-dash-flex">
        {/* NAVBAR START */}
        <div className="navbar-crud-flex">
          <div className="dashboard-admin-container">
            <div className="admin-bar-icon">
              <i
                className="fa fa-bars icon-burger"
                onClick={() => {
                  setToggleSide(!toggleSide);
                }}
                aria-hidden="true"
              ></i>
            </div>
            <div className="search-bar">
              <input
                className="search-input"
                type="text"
                placeholder="Search here ..."
              />
            </div>
            <div className="admin-bar">
              <i className="fa fa-cog settings" aria-hidden="true"></i>
              <i className="fa fa-bell-o notifications" aria-hidden="true"></i>
            </div>
          </div>
          <div className="dashboard">
            <Routes>
              <Route path="/" element={<Statistic />} />
              <Route path="/books" element={<Books />} />
              <Route path="/category" element={<Category />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/adherents" element={<Adherents />} />
            </Routes>
          </div>
        </div>
        {/* NAVBAR END */}
        {/* SIDEBAR START */}
        <div
          className="side-nav"
          style={toggleSide ? styles.popupTrue : styles.popupFalse}
        >
          <h2 className="side-nav-title">ADMIN DASHBOARD</h2>

          <ul className="side-nav-ul">
            <NavLink to="/" className="side-nav-ul-li">
              Dashboard
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="/books" className="side-nav-ul-li">
              Books<i className="fa fa-chevron-right" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="/category" className="side-nav-ul-li">
              Category
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="/authors" className="side-nav-ul-li">
              Authors
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="/adherents" className="side-nav-ul-li">
              Adherents
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </NavLink>
          </ul>
        </div>
        {/* SIDEBAR END */}
      </div>
    </>
  );
};

export default SideNavbar;
