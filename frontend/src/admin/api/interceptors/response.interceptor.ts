import axios, { AxiosResponse } from "axios";

export const responseInterceptorSuccess = (response: AxiosResponse<any>) => {
  /** reject if server responded with 2xx but response.body.status is false */
  if (response.data?.status === false)
    return Promise.reject({
      message:
        response.data?.message || "Sorry!, an error occured. Please try again",
      _error: response.data,
    });

  return response;
};

export const responseInterceptorerror = (error: any) => {
  //we made request, but server responded with error, return server response body
  if (error.response) {
    //transform Internal Server Error to friendlier message
    if (error.response.status === 500) {
      return Promise.reject({
        message: `An error occured on our side, please try again. Report to us if the problem persists`,
        _error: error.response,
      });
    }

    // error message is not an object or error returned from server mismatch the expected
    // error or error message is a string (as expected)
    // Note: we're falling back to a default error message incase server response doesn't have `message` field
    return Promise.reject({
      message:
        error.response.data?.message ||
        "Sorry!, an error occured. Please try again",
      _error: error.response,
    });
  }

  //request wasn't made because of Network Connection or Timeout Errors
  // we'll make sure error returned to caller is `RequestError` type
  else if (error.request && !error.response) {
    return Promise.reject({
      message: `Request Failed!, Make Sure You're Connected To Internet`,
      _error: error.request,
    });
  }
  //Request Cancelled
  else if (axios.isCancel(error)) {
    return Promise.reject({
      message: error.message || "Request Cancelled. Please try again",
      _error: error,
    });
  }
  //Request Config Error
  else
    return Promise.reject({
      message: "Network Error!, Check Your Internet Connection",
      _error: error.request || error.message,
    });
};
