import axios from "axios";
import constants from "../../utils/constants";
import {
  beforeRequest,
  requestError,
} from "./interceptors/request.interceptor.admin";
import {
  errorResponse,
  successResponse,
} from "./interceptors/response.interceptor.admin";

const axiosInstance = axios.create({
  baseURL: constants.BASE_URL,
  timeout: 10_000,
  timeoutErrorMessage: "Request took too long to satisfy, try again",
});

axiosInstance.interceptors.request.use(beforeRequest, requestError);
axiosInstance.interceptors.response.use(successResponse, errorResponse);

export default axiosInstance;
