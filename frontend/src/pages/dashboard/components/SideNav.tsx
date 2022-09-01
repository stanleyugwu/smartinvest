import React from "react";
import { useLocation } from "react-router-dom";

/**
 * The Fixed Side Navigation
 */
const SideNav = () => {
  const handleLogout = () => {

  }
  const {pathname:path} = useLocation();
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
        <a
          className={`pl-0 ml-0 text-center`}
          href="index.php"
          style={{ color: "White", fontSize: 20, fontWeight: "bolder" }}
        >
          <img
            src="https://www.megatradevilla.com/logo.png"
            style={{ width: 250 }}
          />
        </a>
      </div>
      {/* Navigation */}
      <ul
        className="accordion ms-main-aside fs-14"
        id="side-nav-accordion"
        style={{ backgroundColor: "#272F3D" }}
      >
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard" className={path === "/dashboard" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-home" style={{ fontSize: 17 }} />
              Dashboard
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard/live-trading" className={path === "/dashboard/live-trading" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-window-maximize" style={{ fontSize: 17 }} />
              Live Trading
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard/profile" className={path === "/dashboard/profile" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-user-circle" style={{ fontSize: 17 }} />
              Account Profile
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard/deposit" className={path === "/dashboard/deposit" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-credit-card" style={{ fontSize: 17 }} /> Make
              Deposits
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard/history" className={path === "/dashboard/history" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-clock" style={{ fontSize: 17 }} /> Trade
              History
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard/invest" className={path === "/dashboard/invest" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-list-ul" style={{ fontSize: 17 }} />{" "}
              Investment Plans
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard/withdraw" className={path === "/dashboard/withdraw" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-suitcase" style={{ fontSize: 17 }} />{" "}
              Withdrawals
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard/wallet-connect" className={path === "/dashboard/wallet-connect" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-suitcase" style={{ fontSize: 17 }} /> Wallet
              Connect{" "}
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="/dashboard/support" className={path === "/dashboard/support" ? 'active' : ''}>
            <span style={{ color: "white" }}>
              <i className="fa fa-envelope" style={{ fontSize: 17 }} /> Our
              Support
            </span>
          </a>
        </li>
        <li className="menu-item" style={{ paddingBottom: 8 }}>
          <a href="#" onClick={handleLogout}>
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
