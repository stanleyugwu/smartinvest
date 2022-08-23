import { AxiosRequestConfig } from "axios";
import getUserAccessToken from "../services/getUserAccessToken";

const requestInterceptor = (config: AxiosRequestConfig<any>) => {
  const accessToken = getUserAccessToken();
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `${accessToken}`; // token from storage wil have `Bearer ` prefix
  }
  return config;
};

export default requestInterceptor;
