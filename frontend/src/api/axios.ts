import axios from "axios";
import constants from "../utils/constants";
import requestInterceptor from "./interceptors/request.interceptor";
import {
  responseInterceptorerror,
  responseInterceptorSuccess,
} from "./interceptors/response.interceptor";

const axiosInstance = axios.create({
  baseURL: constants.BASE_URL,
  timeout: 10_000,
  timeoutErrorMessage: "Request took too long to satisfy, try again",
});

axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(
  responseInterceptorSuccess,
  responseInterceptorerror
);

export default axiosInstance;
