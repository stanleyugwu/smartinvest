import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { sendErrorResponse } from "../modules/utils";
import StatusCode from "../status";

const authChecker = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return sendErrorResponse(
      res,
      "Unauthorized request.",
      StatusCode.UNAUTHORIZED,
      "You forgot to send your authorization token."
    );
  }

  if (authorization.indexOf("Bearer") !== 0) {
    return sendErrorResponse(
      res,
      "Malformatted token.",
      StatusCode.UNAUTHORIZED,
      "Provide a valid authorization token."
    );
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // @ts-ignore
    req.userId = typeof decoded == "string" ? decoded : decoded.id;
  } catch (err: any) {
    console.log("midlewares.auth", err.message);

    return sendErrorResponse(
      res,
      "Invalid token.",
      StatusCode.UNAUTHORIZED,
      "Provide a valid authorization token."
    );
  }

  return next();
};

export default authChecker;
