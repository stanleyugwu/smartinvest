import axios, { AxiosError, AxiosResponse } from "axios";
import useAdminAppStore from "../../../store/admin";
import { ErrorRes, SuccessRes } from "../../../types";

/**
 * Any status codes that falls outside the range of 2xx cause this function to trigger
 * Do something with response error
 */
export const errorResponse = (error: AxiosError<ErrorRes>) => {
  //request wasn't made because of Internet Connection
  if (error.code === "ERR_NETWORK") {
    return Promise.reject<ErrorRes>({
      message: `Network Error`,
      howToFix: `Make sure you're connected to internet and try again`,
    });
  }

  //request timed out
  if (error.code === "ECONNABORTED") {
    return Promise.reject<ErrorRes>({
      message: `Request Timed-out`,
      howToFix: error.message || `Check your internet connection and try again`,
    });
  }

  //Request Cancelled
  if (axios.isCancel(error)) {
    return Promise.reject<ErrorRes>({
      message: error.message || "Request Cancelled",
      howToFix: "Please try again",
    });
  }

  // Invalid token handler
  if(error.response?.data.message.toLowerCase().includes("invalid token")){
    localStorage.removeItem("$__a_t_admin");
    useAdminAppStore.getState().setAccessToken(undefined);
    window.location.reload();
  }

  return Promise.reject({
    message: error.response?.data?.message || "Request Failed",
    howToFix: error.response?.data?.howToFix || "Please try again",
  });
};

/**
 * Any status code that lie within the range of 2xx cause this function to trigger
 * Do something with response data
 */
export const successResponse = (res: AxiosResponse):SuccessRes => {
  // return relevant response data from server
  return {
    message: res.data?.message || "Request Successful",
    data: res.data?.data,
  };
};
