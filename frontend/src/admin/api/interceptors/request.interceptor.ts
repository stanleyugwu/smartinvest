import { AxiosRequestConfig } from "axios";
import getAccessToken from "../services/getAdminAccessToken";

const requestInterceptor = (config: AxiosRequestConfig<any>) => {
  const accessToken = getAccessToken();
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `${accessToken}`; // token from storage wil have `Bearer ` prefix
  }
  return config;
};

export default requestInterceptor;
