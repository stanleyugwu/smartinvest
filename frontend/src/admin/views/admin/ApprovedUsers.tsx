import React from "react";
import { useQuery } from "react-query";
import Toast from "../../../components/Toast";
import { ErrorRes, SuccessRes } from "../../../types";
import axiosInstance from "../../api/axios";
import ApprovedUser, {
  UserProps,
} from "../../components/Cards/UserCard";

type ApprovedUsersRes = SuccessRes<UserProps[]>;
export default function ApprovedUsers() {
  const { data, isLoading, error, failureCount, refetch } = useQuery<
    ApprovedUsersRes,
    ErrorRes,
    ApprovedUsersRes
  >(
    "fetch_approved_users",
    () =>
      axiosInstance
        .get("/api/admin/latest_approved_users")
        .then((res) => res as any as ApprovedUsersRes),
    { retry: true, refetchInterval:3000 }
  );
  return (
    <>
      <div className="flex flex-wrap">
        <div className="p-1 md:p-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-4">
          <h6 className="text-blueGray-700 text-xl font-bold uppercase mb-2">
            Recent Approved Users
          </h6>
          {isLoading ? (
            <div>
              <p className="text-blueGray-700 font-bold uppercase">
                Loading...<i className="fa fa-spinner fa-spin"></i>
              </p>
            </div>
          ) : error ? (
            (failureCount === 0 &&
              Toast.fire(error.message, error.howToFix, "error"),
            (
              <div className="text-center w-full bg-white px-6 p-4">
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
          ) : data?.data?.length === 0 ? (
            <p className="font-semibold ml-7 text-center text-sm text-blueGray-600 mt-4">
              NO RECENTLY APPROVED USER YET
            </p>
          ) : (
            data?.data?.map((user) => (
              <ApprovedUser
                country={user.country}
                currency={user.currency}
                email={user.email}
                fullname={user.fullname}
                phone={user.phone}
                key={user.id}
                id={user.id}
                accountManager={user.accountManager}
                approved={user.approved}
                balance={user.balance}
                credit={user.credit}
                profit={user.profit}
                deposit={user.deposit}
                createdAt={user.createdAt}
                tradingPercentage={user.tradingPercentage}
                updatedAt={user.updatedAt}
                withdrawal={user.withdrawal}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
