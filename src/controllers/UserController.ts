import { Request, Response } from "express";
import User from "../models/User";
import { sendErrorResponse, sendSuccessResponse } from "../modules/utils";
import StatusCode from "../status";
import { SignupBody } from "./AuthController";

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

  async updateProfile(req: Request<any, any, SignupBody>, res: Response) {
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

    let { country, currency, email, fullname, password, phone } = req.body;
    if (!country && !currency && !email && !fullname && !password && !phone) {
      return sendErrorResponse(
        res,
        "Empty update fields",
        StatusCode.BAD_GATEWAY,
        "You supplied empty updte values"
      );
    }

    try {
      // get user profile info
      const user = await User.findByPk(userId);

      // handle missing account
      if (!user) {
        return sendErrorResponse(
          res,
          "Account not found",
          StatusCode.NOT_FOUND,
          "Account not found, try re-logging in"
        );
      }

      // update user profile
      const updatedUser = await user.update({
        country: country.trim() || user.country,
        currency: currency || user.currency,
        email: email.trim() || user.email,
        fullname: fullname.trim() || user.fullname,
        password: password || user.password,
        phone: phone.trim() || user.phone,
      });

      return sendSuccessResponse(
        res,
        {
          profile: updatedUser.getProfileInfo(),
          account: updatedUser.getAccountInfo(),
        },
        "Profile Updated Successfully"
      );
    } catch (error: any) {
      return sendErrorResponse(res, error.message);
    }
  }

  async importWallet(req: Request, res: Response) {}
}

export default new UserController();
