import React from "react";

/**
 * Main content. Wraps children with welcome panel and top navigation
 */
const MainContent = ({ children = <div /> }: { children?: JSX.Element }) => {
  return (
    <main className="body-content">
      {/* Navigation Bar */}
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
          <a
            className="pl-0 ml-0 text-center navbar-brand mr-0"
            href="index.php"
          >
            <img
              src="https://www.megatradevilla.com/logo.png"
              style={{ width: 180, padding: 7 }}
            />
          </a>
        </div>
        <ul
          className="offset-sm-6 ms-nav-list ms-inline mb-0"
          id="ms-nav-options"
        >
          <li className="ms-nav-item ms-nav-user dropdown">
            <a
              href="#"
              id="userDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "#FF4444", fontSize: 16, paddingTop: 5 }}
            >
              Welcome
              <b>Dev</b> &nbsp;
              <i
                className="fa fa-user-circle ms-user-img ms-img-round float-right"
                style={{ fontSize: 30, color: "#FF4444", float: "right" }}
              />
            </a>
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
                <a className="media fs-14 p-2" href="account.php">
                  {" "}
                  <span>
                    <i className="flaticon-user mr-2" /> Profile
                  </span>{" "}
                </a>
                <a className="media fs-14 p-2" href="account.php">
                  {" "}
                  <span>
                    <i className="flaticon-gear mr-2" /> Account Settings
                  </span>{" "}
                </a>
                <a className="media fs-14 p-2" href="support.php">
                  {" "}
                  <span>
                    <i className="flaticon-question mr-2" /> Contact Us
                  </span>{" "}
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="dropdown-menu-footer">
                <a className="media fs-14 p-2" href="../index.php?log=1">
                  {" "}
                  <span>
                    <i className="flaticon-shut-down mr-2" /> Logout
                  </span>{" "}
                </a>
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
      <div className="ms-content-wrapper">
        <div className="row">{children}</div>
      </div>
    </main>
  );
};

export default MainContent;
