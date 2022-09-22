import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { ErrorRes, SuccessRes } from "../../../types";
import axiosInstance from "../../api/axios";
import User, { UserProps } from "../../components/Cards/UserCard";

export default function FindUser() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const defferedKeyword = useDeferredValue(searchKeyword);
  const [searching, setSearching] = useState(false);
  const { data, error, refetch } = useQuery<
    SuccessRes<UserProps[]>,
    ErrorRes,
    SuccessRes<UserProps[]>
  >(
    "user_search",
    () =>
      axiosInstance
        .get(`api/admin/find_user?userEmailOrName=${searchKeyword}`)
        .then((res) => res as any as SuccessRes<UserProps[]>)
        .finally(() => setSearching(false)),
    { enabled: false, retry: false }
  );

  // auto fetches when keyword updates
  // implements debouncing by 1s
  let timeoutId = useRef<NodeJS.Timeout>();
  useEffect(() => {
    clearTimeout(timeoutId.current);
    if (searchKeyword.length > 0) {
      setSearching(true);
      timeoutId.current = setTimeout(() => {
        refetch();
      }, 1000);
    } else setSearching(false);
  }, [defferedKeyword]);

  return (
    <>
      <div className="p-4 relative flex flex-col min-w-0 bg-gray-100 break-words w-full mb-6 shadow-xl rounded-lg mt-4">
        <div className="">
          <h6 className="text-blueGray-700 text-xl font-bold uppercase mb-4">
            Search For User By Email Or Name
          </h6>
          <div className="flex flex-row flex-wrap items-center">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-5">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Email address or fullname"
                value={searchKeyword}
                onChange={(evt) => setSearchKeyword(evt.target.value)}
                className="border-1 border-gray-700 px-5 py-5 placeholder-blueGray-400 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="uppercase text-sm font-semibold my-4 text-blueGray-700">
            RESULTS
          </p>
          <div>
            {searching ? (
              <div className="text-center mx-auto">
                <i className="fa fa-spinner fa-spin fa-2x"></i>
                <p className="uppercase text-blueGray-600 font-semibold">
                  Searching...
                </p>
              </div>
            ) : error ? (
              <div className="text-center">
                <i className="fa fa-error"></i>
                <p className="font-semibold text-md">{error.message}</p>
                <p className="text-blueGray-600">{error.howToFix}</p>
              </div>
            ) : (
              data?.data?.map((user) => (
                <User {...user} key={user.id} afterAction={() => refetch()} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
