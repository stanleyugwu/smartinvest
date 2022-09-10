import { Response } from "express";

export type ErrorObject = {
  message: string;
  howToFix: string;
};

export type SuccessObject<DataType = any> = {
  message: string;
  data?: DataType;
};

export const sendErrorResponse = (
  res: Response,
  message: string,
  status: number = 500,
  fix?: string
) => {
  message = message.replaceAll("Validation error:", "").trim();

  if (message.search("\n") > 0) {
    message = message.split("\n").join(" and ");
  }

  return res.status(status).json({
    message,
    howToFix: fix || "Check request parameters and try again",
  });
};

export const sendSuccessResponse = <DT = any>(
  res: Response,
  data: DT,
  message?: string,
  status?: number
) => {
  const response: SuccessObject<DT> = {
    message: message || "Operation Successful",
    data,
  };

  return res.status(status || 200).json(response);
};
