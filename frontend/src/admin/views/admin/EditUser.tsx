import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {number, object, string } from "yup";
import ErrorField from "../../../components/ErrorField";
import Toast from "../../../components/Toast";
import { UserAccount } from "../../../store";
import { SuccessRes } from "../../../types";
import axiosInstance from "../../api/axios";

type UserAccountData = UserAccount & { approved: "true" | "false"; id: string };
const AccountUpdateSchema = object().shape({
  deposit: number().required("Provide a value"),
  balance: number().required("Provide a value"),
  profit: number().required("Provide a value"),
  credit: number().required("Provide a value"),
  withdrawal: number().required("Provide a value"),
  accountManager: string().required("Provide a value"),
  tradingPercentage: number().required("Provide a value"),
  approved: string().oneOf(["true", "false"]).required("Provide a value"),
});

const EditUser = () => {
  const { state: userData } = useLocation() as {
    state: UserAccountData;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAccountData>({
    resolver: yupResolver(AccountUpdateSchema),
  });
  const [updatingAccount, setUpdatingAccount] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    if (updatingAccount) return;
    setUpdatingAccount(true);
    try {
      const res = (await axiosInstance.post(
        `/api/admin/update_user_account?userId=${userData.id}`,
        {
          accountManager: data.accountManager,
          balance: data.balance,
          credit: data.credit,
          deposit: data.deposit,
          profit: data.profit,
          tradingPercentage: data.tradingPercentage,
          withdrawal: data.withdrawal,
          approved: data.approved === "true" ? true : false,
        }
      )) as SuccessRes;
      Toast.fire(res.message, "User account updated successfully", "success");
    } catch (error: any) {
      Toast.fire(error.message, error.howToFix, "error");
    } finally {
      setUpdatingAccount(false);
    }
  });

  return (
    <>
      <div className="p-1 md:p-4 relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 shadow-xl rounded-lg mt-4">
        <h1 className="mb-6 mt-4 text-blueGray-600 text-lg uppercase font-bold">
          Edit User Account
        </h1>
        <form onSubmit={onSubmit}>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="status"
            >
              Account Status
            </label>
            <select className="border-0 shadow w-full" {...register("approved")}>
              <option value={"true"} selected={userData.approved === "true"}>
                Approved
              </option>
              <option value={"false"} selected={userData.approved === "false"}>
                Un-Approved
              </option>
            </select>
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="accountManager"
            >
              Account Manager
            </label>
            <input
              type="text"
              id="accountManager"
              defaultValue={userData.accountManager}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Account Manager"
              {...register("accountManager")}
            />
            <ErrorField error={errors.accountManager} />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="balance"
            >
              Balance
            </label>
            <input
              type="number"
              id="balance"
              defaultValue={userData.balance}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Balance"
              {...register("balance")}
            />
            <ErrorField error={errors.balance} />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="credit"
            >
              Credit
            </label>
            <input
              type="number"
              id="credit"
              defaultValue={userData.credit}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Credit"
              {...register("credit")}
            />
            <ErrorField error={errors.credit} />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="deposit"
            >
              Deposit
            </label>
            <input
              type="number"
              id="deposit"
              defaultValue={userData.deposit}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Deposit"
              {...register("deposit")}
            />
            <ErrorField error={errors.deposit} />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="profit"
            >
              Profit
            </label>
            <input
              type="number"
              id="profit"
              defaultValue={userData.profit}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Profit"
              {...register("profit")}
            />
            <ErrorField error={errors.profit} />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="tradingPercentage"
            >
              Trading Percentage
            </label>
            <input
              type="number"
              id="tradingPercentage"
              defaultValue={userData.tradingPercentage}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Trading Percentage"
              {...register("tradingPercentage")}
            />
            <ErrorField error={errors.tradingPercentage} />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="withdrawal"
            >
              Withdrawal
            </label>
            <input
              type="number"
              defaultValue={userData.withdrawal}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Withdrawal"
              {...register("withdrawal")}
            />
            <ErrorField error={errors.withdrawal} />
          </div>

          <div className="text-center mt-6">
            <button
              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="submit"
              disabled={updatingAccount}
            >
              {updatingAccount ? (
                <i className="fa fa-spinner fa-spin"></i>
              ) : (
                "Update Account"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;
