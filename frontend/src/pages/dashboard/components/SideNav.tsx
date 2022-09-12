import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../assets/images/logo.png';

/**
 * The Fixed Side Navigation
 */
const SideNav = () => {
  const {signOut} = useAuth()
  const {pathname:path, search} = useLocation();
  return (
    <aside
      id="ms-side-nav"
      className="side-nav fixed ms-aside-scrollable ms-aside-left"
      style={{ backgroundColor: "#272F3D" }}
    >
      {/* Logo */}
      <div
        className="logo-sn ms-d-block-lg"
        style={{ backgroundColor: "#272F3D" }}
      >
        <Link
          className={`pl-0 ml-0 text-center`}
          to="/"
          style={{ color: "White", fontSize: 20, fontWeight: "bolder" }}
        >
          <img
            src={logo}
            style={{ width: 250 }}
            alt="logo"
          />
        </Link>
      </div>
      {/* Navigation */}
      <ul
        className="accordion ms-main-aside fs-14"
        id="side-nav-accordion"
        style={{ backgroundColor: "#272F3D" }}
      >
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/" className={path === "/" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-home" style={{ fontSize: 17 }} />
              Dashboard
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/live-trading" className={path === "/live-trading" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-window-maximize" style={{ fontSize: 17 }} />
              Live Trading
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/profile" className={path === "/profile" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-user-circle" style={{ fontSize: 17 }} />
              Account Profile
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/deposit" className={path === "/deposit" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-credit-card" style={{ fontSize: 17 }} /> Make
              Deposits
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/trade-history" className={path === "/trade-history" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-clock" style={{ fontSize: 17 }} /> Trade
              History
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/invest" className={path === "/invest" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-list-ul" style={{ fontSize: 17 }} />{" "}
              Investment Plans
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/wallet-connect?action=withdraw" className={path === "/wallet-connect" && search === "?action=withdraw" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-suitcase" style={{ fontSize: 17 }} />{" "}
              Withdrawals
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/wallet-connect?action=connect" className={path === "/wallet-connect" && search === "?action=connect" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-suitcase" style={{ fontSize: 17 }} /> Wallet
              Connect{" "}
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <Link to="/support" className={path === "/support" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-envelope" style={{ fontSize: 17 }} /> Our
              Support
            </span>
          </Link>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="#" onClick={signOut}>
            <span style={{ color: "white", textAlign: "center" }}>
              {" "}
              Log Out
            </span>
          </a>
        </li>
        {/* /Apps */}
      </ul>
    </aside>
  );
};

export default SideNav;
