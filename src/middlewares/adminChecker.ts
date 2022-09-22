import { NextFunction, Request, Response } from "express";
import Admin from "../models/Admin";
import { sendErrorResponse } from "../modules/utils";
import StatusCode from "../status";

const adminChecker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // @ts-ignore
  const userId = req.userId;

  // req.userId should be made avail by authChecker
  if (!userId) {
    return sendErrorResponse(
      res,
      "Invalid Token",
      StatusCode.FORBIDDEN,
      "Provide a valid authorization token"
    );
  }

  // check if user is admin
  const isAdmin = await Admin.findByPk(userId);
  if (!isAdmin) {
    return sendErrorResponse(
      res,
      "Unauthorized Operation",
      StatusCode.FORBIDDEN,
      "You are not an admin"
    );
  } else return next();
};

export default adminChecker;
