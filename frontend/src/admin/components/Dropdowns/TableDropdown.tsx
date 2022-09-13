import React, { useState } from "react";
import { useQueries, useQueryClient } from "react-query";
import Toast from "../../../components/Toast";
import { ErrorRes, SuccessRes } from "../../../types";
import axiosInstance from "../../api/axios";

/**
 * Approve function adapter
 */
const approveFn = async (userId: number): Promise<SuccessRes<any>> =>
  axiosInstance
    .get(`/api/admin/approve_user?userId=${userId}`) as Promise<SuccessRes<any>>;

/**
 * Delete function adapter
 */
const deleteFn = async (userId: number): Promise<SuccessRes<any>> =>
  axiosInstance
    .delete(`/api/admin/delete_user?userId=${userId}`) as Promise<SuccessRes<any>>;

const TableDropDown = ({ userId }: { userId: number }) => {
  const [approving, setApproving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleApprove = async () => {
    if(approving) return;
    try {
      setApproving(true);
      const res = await approveFn(userId);
      Toast.fire(res.message, undefined, "success");
    } catch (error: any) {
      Toast.fire(error.message, error.howToFix, "error");
    } finally {
      setApproving(false);
    }
  };

  const handleRemove = async () => {
    if(deleting) return;
    try {
      setDeleting(true);
      const action = await Toast.fire({
        position:"center",
        titleText:"Delete User?",
        text: "Are you sure you want to delete this user?",
        icon:"warning",
        confirmButtonText:"Delete",
        cancelButtonText:"Cancel",
        showCancelButton:true,
        showConfirmButton:true,
        timer:undefined,
        confirmButtonColor:"red",
      });
      if(action.isConfirmed){
        const res = await deleteFn(userId);
        Toast.fire(res.message, undefined, "success");
      }
    } catch (error: any) {
      Toast.fire(error.message, error.howToFix, "error");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="flex justify-center items-center ml-2 bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-sm">
      <button
        disabled={approving}
        className="bg-green-500 px-2.5 py-1 rounded-md cursor-pointer hover:bg-green-400"
        onClick={(evt) => {
          evt.preventDefault();
          handleApprove();
        }}
      >
        <i
          className={`fa ${
            approving ? "fa-spinner fa-spin" : "fa-check"
          } text-white text-xs font-bold w-full whitespace-nowrap`}
          title={approving ? "Approving user" : "Approve User"}
        ></i>
      </button>
      <button
        disabled={deleting}
        className="bg-red-500 px-2.5 py-1 ml-3 rounded-md cursor-pointer hover:bg-red-400"
        onClick={(evt) => {
          handleRemove();
        }}
      >
        <i
          className={`fa ${
            deleting ? "fa-spinner fa-spin" : "fa-trash"
          } text-white text-xs font-bold w-full whitespace-nowrap`}
          title={deleting ? "Deleting user" : "Delete User"}
        ></i>
      </button>
    </div>
  );
};

export default TableDropDown;
