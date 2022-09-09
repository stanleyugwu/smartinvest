import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authChecker = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized request.",
      howToFix: "You forgot to send your authorization token.",
    });
  }

  if (authorization.indexOf("Bearer") !== 0) {
    return res.status(401).json({
      message: "Malformatted token.",
      howToFix: "Provide a valid authorization token.",
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // @ts-ignore
    req.userId = typeof decoded == "string" ? decoded : decoded.id;
  } catch (err:any) {
    console.log("midlewares.auth", err.message);

    return res.status(401).json({
      message: "Invalid token.",
      howToFix: "Provide a valid authorization token.",
    });
  }

  return next();
};

export default authChecker;
