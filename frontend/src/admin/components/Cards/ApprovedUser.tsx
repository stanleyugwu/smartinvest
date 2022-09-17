import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Toast from "../../../components/Toast";
import { ErrorRes, SuccessRes } from "../../../types";
import axiosInstance from "../../api/axios";
import timeSince from "../../utils/timeAgo";

export interface ApprovedUserProps {
  id: number;
  country: string;
  currency: string;
  email: string;
  fullname: string;
  phone: string;
  approved: boolean;
  accountManager: string;
  balance: number;
  credit: number;
  deposit: number;
  profit: number;
  tradingPercentage: number;
  withdrawal: number;
  updatedAt: string;
  createdAt: string;
}
const DataField = ({ name, value }: { name: string; value: string }) => (
  <div className="relative w-full mb-3 border-l-2 border-lightBlue-600 pl-2">
    <label
      className="block uppercase text-lightBlue-600 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      {name}
    </label>
    <p className="border-0 py-1 text-sm ease-linear transition-all duration-150 font-semibold">
      {value}
    </p>
  </div>
);

const ApprovedUser = ({
  accountManager,
  approved,
  balance,
  country,
  createdAt,
  credit,
  currency = "$",
  deposit,
  email,
  fullname,
  id,
  phone,
  profit,
  tradingPercentage,
  updatedAt,
  withdrawal,
}: ApprovedUserProps) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => setExpanded(!expanded);
  const navigate = useNavigate();
  const [disapproving, setDisapproving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  /**
   * Handles editing user
   */
  const handleEdit = () => {
    const state = {
      accountManager,
      approved,
      balance,
      country,
      createdAt,
      credit,
      currency,
      deposit,
      email,
      fullname,
      id,
      phone,
      profit,
      tradingPercentage,
      updatedAt,
      withdrawal,
    };
    navigate("/edit-user", { state });
  };

  /**
   * Handles disapproving the user
   */
  const handleDisApprove = async () => {
    if (disapproving) return;
    setDisapproving(true);
    try {
      const data = (await axiosInstance.get(
        `/api/admin/disapprove_user?userId=${id}`
      )) as SuccessRes;
      Toast.fire(data.message, "User disapproved successfully", "success");
    } catch (error: any) {
      Toast.fire(error.message, error.howToFix, "error");
    } finally {
      setDisapproving(false);
    }
  };

  /**
   * Handles deleting user
   */
  const handleDelete = async () => {
    if (deleting) return;
    setDeleting(true);
    try {
      const data = (await axiosInstance.delete(
        `/api/admin/delete_user?userId=${id}`
      )) as SuccessRes;
      Toast.fire(data.message, "User deleted successfully", "success");
    } catch (error: any) {
      Toast.fire(error.message, error.howToFix, "error");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="border">
      <div className="flex items-center justify-between border-b p-2 flex-wrap">
        <p className="uppercase text-blueGray-600 font-bold text-sm">
          <i className="fa fa-user text-white text-lg rounded-full bg-lightBlue-600 mr-2 w-9 h-9 text-center inline-flex justify-center items-center"></i>
          {fullname}
        </p>
        <div className="flex flex-wrap mt-2 lg:mt-0">
          <button
            onClick={handleEdit}
            className="focus:ring focus:outline-none rounded-md p-1 lg:p-2 border text-sm uppercase bg-lightBlue-600 text-white font-semibold"
          >
            <i className="fa fa-edit pr-1"></i>
            Edit
          </button>
          <button
            onClick={handleDisApprove}
            className="focus:ring focus:outline-none rounded-md p-1 lg:p-2 border text-sm uppercase bg-lightBlue-600 text-white font-semibold"
          >
            {disapproving ? (
              <i className="fa fa-spinner fa-spin"></i>
            ) : (
              <>
                <i className="fa fa-ban pr-1"></i>
                DisApprove
              </>
            )}
          </button>
          <button
            onClick={handleDelete}
            className="focus:ring focus:outline-none rounded-md p-1 lg:p-2 border text-sm uppercase bg-red-600 text-white font-semibold"
          >
            {deleting ? (
              <i className="fa fa-spinner fa-spin"></i>
            ) : (
              <>
                <i className="fa fa-trash pr-1"></i>
                Delete
              </>
            )}
          </button>
          <button
            className="focus:ring focus:outline-none rounded-md p-1 border text-sm uppercase px-4 lg:ml-4 bg-lightBlue-600"
            onClick={handleExpand}
          >
            <i
              className={`fa fa-angle-${
                expanded ? "up" : "down"
              } text-sm lg:text-lg text-white font-semibold`}
            ></i>
          </button>
        </div>
      </div>
      {expanded ? (
        <div className="ease-linear transition-all duration-150 mt-3 flex p-2 flex-wrap">
          <div className="lg:w-1/2">
            <DataField name="Email Address" value={email} />
            <DataField name="Country" value={country} />
            <DataField name="Balance" value={`${currency}${balance}`} />
            <DataField name="Account Manager" value={accountManager} />
            <DataField name="Profit" value={`${currency}${profit}`} />
            <DataField
              name="Status"
              value={approved ? "Approved" : "Un Approved"}
            />
            <DataField name="Withdrawal" value={`${currency}${withdrawal}`} />
          </div>
          <div className="lg:w-1/2">
            <DataField name="Phone Number" value={phone} />
            <DataField name="Currency" value={currency} />
            <DataField name="Credit" value={`${currency}${credit}`} />
            <DataField name="Deposit" value={`${currency}${deposit}`} />
            <DataField
              name="Trading Percentage"
              value={tradingPercentage.toString()}
            />
            <DataField
              name="Reg. Date"
              value={timeSince(new Date(createdAt).getMilliseconds())}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ApprovedUser;
