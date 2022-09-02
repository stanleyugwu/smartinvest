import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import useAuth from "../../../hooks/useAuth";

/* Navigation Bar */
const TopNavBar = () => {
  const { signOut } = useAuth();
  return (
    <nav className="navbar ms-navbar" style={{ backgroundColor: "#000" }}>
      <div
        className="ms-aside-toggler ms-toggler pl-0"
        data-target="#ms-side-nav"
        data-toggle="slideLeft"
      >
        <span
          className="ms-toggler-bar bg-primary"
          style={{ backgroundColor: "#fff", height: 3 }}
        />
        <span
          className="ms-toggler-bar bg-primary"
          style={{ backgroundColor: "#fff", height: 3 }}
        />
        <span
          className="ms-toggler-bar bg-primary"
          style={{ backgroundColor: "#fff", height: 3 }}
        />
      </div>
      <div className="logo-sn logo-sm ms-d-block-sm">
        <Link to="/" className="pl-0 ml-0 text-center navbar-brand mr-0">
          <img src={logo} style={{ width: 180, padding: 7 }} alt="logo" />
        </Link>
      </div>
      <ul
        className="offset-sm-6 ms-nav-list ms-inline mb-0"
        id="ms-nav-options"
      >
        <li className="ms-nav-item ms-nav-user dropdown">
          <Link
            to="#"
            id="userDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ color: "#FF4444", fontSize: 16, paddingTop: 5 }}
          >
            Welcome &nbsp;
            <i
              className="fa fa-user-circle ms-user-img ms-img-round float-right"
              style={{ fontSize: 30, color: "#FF4444", float: "right" }}
            />
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-right user-dropdown"
            aria-labelledby="userDropdown"
          >
            <li className="dropdown-menu-header">
              <h6 className="dropdown-header ms-inline m-0">
                <span className="text-disabled" style={{ color: "black" }}>
                  Welcome, Dev
                </span>
              </h6>
            </li>
            <li className="dropdown-divider" />
            <li className="ms-dropdown-list">
              <Link
                className="media fs-14 p-2 text-dark font-weight-normal"
                to={"/profile"}
              >
                <span>
                  <i className="flaticon-user mr-2" /> Profile
                </span>
              </Link>
              <Link
                className="media fs-14 p-2 text-dark font-weight-normal"
                to="/profile"
              >
                <span>
                  <i className="flaticon-gear mr-2" /> Account Settings
                </span>
              </Link>
              <Link
                className="media fs-14 p-2 text-dark font-weight-normal"
                to="/support"
              >
                <span>
                  <i className="flaticon-question mr-2" /> Contact Us
                </span>
              </Link>
            </li>
            <li className="dropdown-divider" />
            <li className="dropdown-menu-footer">
              <Link
                className="media fs-14 p-2 text-dark font-weight-normal"
                to={"#"}
                onClick={signOut}
              >
                <span>
                  <i className="flaticon-shut-down mr-2" /> Logout
                </span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div
        className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler"
        data-toggle="slideDown"
        data-target="#ms-nav-options"
      >
        <span
          className="ms-toggler-bar bg-primary"
          style={{ backgroundColor: "#fff" }}
        />
        <span
          className="ms-toggler-bar bg-primary"
          style={{ backgroundColor: "#fff" }}
        />
        <span
          className="ms-toggler-bar bg-primary"
          style={{ backgroundColor: "#fff" }}
        />
      </div>
    </nav>
  );
};

export default TopNavBar;
