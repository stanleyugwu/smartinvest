import { AxiosError, AxiosRequestConfig } from "axios";
import useAppStore from "../../store";
import { ErrorRes } from "../../types";

/**
 * Called before request is sent
 */
const beforeRequest = (config: AxiosRequestConfig<any>) => {
  const accessToken = useAppStore.getState().accessToken;
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`; // token from storage wil have `Bearer ` prefix
  }
  return config;
};

/**
 * Called when an error occured before request is sent, maybe bad config
 */
const requestError = (error: AxiosError): Promise<ErrorRes> => {
  return Promise.reject({
    message: error.message || "An error occured",
    howToFix: "Please try again",
  });
};

export { beforeRequest, requestError };
