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
  const response = {
    message,
    howToFix: fix,
  };

  if (message.search("\n") > 0) {
    response.message = message.split("\n").join(" and ");
  }

  return res.status(status).json(response);
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
