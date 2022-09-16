import React from "react";
import { useQuery } from "react-query";
import Toast from "../../../components/Toast";
import { ErrorRes, SuccessRes } from "../../../types";
import axiosInstance from "../../api/axios";
import UnApprovedUser from "./UnApprovedUser";
export interface UnApprovedUserTableProps {
  color?: "light" | "dark";
}

export type ServerUnApprovedUser = Array<{
  id: number;
  fullname: string;
  email: string;
  phone: string;
  currency: string;
  country: string;
  createdAt: string;
}>;

export type UnApprovedUsersServerRes = SuccessRes<ServerUnApprovedUser>;

const unApprovedUsersFn = async (): Promise<UnApprovedUsersServerRes> => {
  return axiosInstance
    .get("/api/admin/latest_unapproved_users")
    .then((res) => res) as Promise<UnApprovedUsersServerRes>;
};

export default function UnApprovedUserTable({
  color = "light",
}: UnApprovedUserTableProps) {
  const { data, error, isLoading, refetch,failureCount } = useQuery<
    UnApprovedUsersServerRes,
    ErrorRes,
    UnApprovedUsersServerRes
  >("unApprovedUsers", unApprovedUsersFn, {
    refetchInterval: 3000,
    retry: true,
  });

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  FullName
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email Address
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Country
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Phone Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  REG. DATE
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <div className="absolute bg-white w-full p-4 text-center">
                  <i className="fa fa-spinner fa-spin text-2xl text-blueGray-700"></i>
                </div>
              ) : error ? (
                (failureCount === 0 && Toast.fire(error.message, error.howToFix, "error"),
                (
                  <div className="text-center w-full absolute bg-white px-6 p-4">
                    <p className="text-blueGray-700 text-lg font-bold">
                      An error occurred, please try again
                    </p>
                    <button
                      className="bg-lightBlue-600 px-2 py-1 rounded-md text-white uppercase text-sm mt-3"
                      onClick={(evt) => refetch()}
                    >
                      Try Again
                    </button>
                  </div>
                ))
              ) : (
                data?.data?.length === 0 ? (
                  <tr className="font-semibold ml-7">NO RECENT UNAPPROVED USER</tr>
                ) : data?.data?.map((user) => (
                  <UnApprovedUser
                    country={user.country}
                    currency={user.currency}
                    email={user.email}
                    fullname={user.fullname}
                    phone={user.phone}
                    color={color}
                    key={user.id}
                    id={user.id}
                    regDate={user.createdAt}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
