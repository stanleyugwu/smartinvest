import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  return (
    <>
      <Link
        className="text-blueGray-500 block"
        to="/"
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require("../../assets/img/team-1-800x800.jpg").default}
            />
          </span>
        </div>
      </Link>
    </>
  );
};

export default UserDropdown;
