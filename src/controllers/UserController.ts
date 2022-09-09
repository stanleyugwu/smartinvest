import { Request, Response } from "express";
import User from "../models/User";
import { sendErrorResponse, sendSuccessResponse } from "../modules/utils";
import StatusCode from "../status";

class UserController {
  async getProfile(req: Request, res: Response) {
    // @ts-ignore
    const userId = req.userId;
    if (!userId) {
      /**
       * req.userId should be put by authChecker middleware
       * if not then request is invalid
       */
      return sendErrorResponse(
        res,
        "Invalid Token",
        StatusCode.FORBIDDEN,
        "Provide a valid authorization token"
      );
    }

    try {
      // get user profile info
      const user = await User.findByPk(userId);

      // handle missing account
      if (!user)
        return sendErrorResponse(
          res,
          "Account not found",
          StatusCode.NOT_FOUND,
          "Account not found, try re-logging in"
        );

      return sendSuccessResponse(
        res,
        {
          profile: user.getProfileInfo(),
          account: user.getAccountInfo(),
        },
        "Retrieval Successful"
      );
    } catch (error: any) {
      return sendErrorResponse(res, error.message);
    }
  }

  updateProfile(req: Request, res: Response) {}

  importWallet(req: Request, res: Response) {}
}

export default new UserController();
