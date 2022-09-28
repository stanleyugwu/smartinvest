import React, { useEffect } from "react";
import { useQueries, useQuery, useQueryClient } from "react-query";
import CardStats from "../Cards/CardStats";
import axiosInstance from "../../api/axios";
import useAdminAppStore from "../../../store/admin";
import { ErrorRes, SuccessRes } from "../../../types";

/**
 * Constructs a react query function that fetches certain kind of stat
 */
const statFnConstructor = (statType: "users" | "approved" | "unapproved") => {
  const statUrl =
    statType === "users"
      ? "users"
      : statType === "approved"
      ? "approved_users"
      : "unapproved_users";
  const getStatFn = async (): Promise<SuccessRes> => {
    return axiosInstance
      .get(`/api/admin/total_${statUrl}`)
      .then((res) => res) as Promise<SuccessRes>;
  };
  return getStatFn;
};

export default function HeaderStats() {
  const setToken = useAdminAppStore((state) => state.setAccessToken);
  const unapproved = useQuery("unApprovedUsersCount",statFnConstructor("unapproved"),{
    refetchInterval: 3000,
    retry: true,
  });
  const users = useQuery("usersCount", statFnConstructor("users"),{
    refetchInterval: 3000,
    retry: true,
  })
  const approved = useQuery("approvedUsersCount", statFnConstructor("approved"),{
    refetchInterval: 3000,
    retry: true,
  } )

  // check if signed in user is an admin by making a request with his token
  // then loggin out if request fails cus of authorization
  const checkAdmin = async () => {
    try {
      await statFnConstructor("approved")();
    } catch (error: any) {
      if ((error as ErrorRes).message.toLowerCase().includes("unauthorized")) {
        // not an admin, log out
        setToken(undefined);
        localStorage.removeItem("$__a_t_admin");
      }
    }
  };
  // performs token revalidation on mount
  useEffect(() => {
    checkAdmin();
  }, []);
  
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 py-2 md:pt-32 lg:pb-10">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ALL USERS"
                  statTitle={
                    users.isLoading ? (
                      "spinner"
                    ) : (
                      users.data?.data || 0
                    )
                  }
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                  key={users?.data?.data}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="APPROVED"
                  statTitle={
                    approved.isLoading ? (
                      <i className="fa fa-spinner fa-spin"></i>
                    ) : (
                      approved.data?.data || 0
                    )
                  }
                  statIconName="fas fa-check-circle"
                  statIconColor="bg-orange-500"
                  key={approved?.data?.data}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="UNAPPROVED"
                  statTitle={
                    unapproved.isLoading ? (
                      <i className="fa fa-spinner fa-spin"></i>
                    ) : (
                      unapproved.data?.data || 0
                    )
                  }
                  statIconName="fas fa-user"
                  statIconColor="bg-pink-500"
                  key={unapproved?.data?.data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
