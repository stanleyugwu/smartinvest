import { Request, Response } from "express";
import User from "../models/User";
import { sendErrorResponse, sendSuccessResponse } from "../modules/utils";
import StatusCode from "../status";

export type UserAccountUpdate = {
  deposit: number;
  balance: number;
  profit: number;
  credit: number;
  withdrawal: number;
  accountManager: string;
  tradingPercentage: number;
};

class AdminController {
  async updateUserAccount(
    req: Request<any, any, UserAccountUpdate, { userId: string }>,
    res: Response
  ) {
    // validate userID
    const userId = req.query.userId;
    if (!userId || !userId.trim()) {
      return sendErrorResponse(
        res,
        "Missing User ID",
        StatusCode.BAD_REQUEST,
        "You didn't provide the ID of user to update"
      );
    }

    // validate update values
    const {
      accountManager,
      balance,
      credit,
      deposit,
      profit,
      tradingPercentage,
      withdrawal,
    } = req.body;
    if (
      !accountManager &&
      !balance &&
      !credit &&
      !deposit &&
      !profit &&
      !tradingPercentage &&
      !withdrawal
    ) {
      return sendErrorResponse(
        res,
        "Empty update fields",
        StatusCode.BAD_REQUEST,
        "You supplied empty updte values"
      );
    }

    try {
      const user = await User.findByPk(userId);
      if (!user)
        return sendErrorResponse(
          res,
          "User Not Found",
          StatusCode.NOT_FOUND,
          "User with given ID doesn't exist"
        );

      // update user account
      const updatedUser = await user.update({
        ...user.toJSON(),
        ...req.body
      });

      return sendSuccessResponse(
        res,
        {
          profile: updatedUser.getProfileInfo(),
          account: updatedUser.getAccountInfo(),
        },
        "User Account Updated Successfully"
      );
    } catch (error: any) {
      return sendErrorResponse(res, error.message, StatusCode.BAD_REQUEST);
    }
  }

  async countApproveUsers(req: Request, res: Response) {
    try {
      const numOfApprvdUsers = await User.count({
        where: {
          approved: true,
        },
      });
      return sendSuccessResponse(res, numOfApprvdUsers, "Retrieval Successful");
    } catch (error: any) {
      return sendErrorResponse(res, error.message);
    }
  }

  async countUnapprovedUsers(req: Request, res: Response) {
    try {
      const numOfUnApprvdUsers = await User.count({
        where: {
          approved: false,
        },
      });
      return sendSuccessResponse(
        res,
        numOfUnApprvdUsers,
        "Retrieval Successful"
      );
    } catch (error: any) {
      return sendErrorResponse(res, error.message);
    }
  }

  async countAllUsers(req: Request, res: Response) {
    try {
      const numOfUsers = await User.count();
      return sendSuccessResponse(res, numOfUsers, "Retrieval Successful");
    } catch (error: any) {
      return sendErrorResponse(res, error.message);
    }
  }
  async disApproveUser(
    req: Request<any, any, any, { userId: string }>,
    res: Response
  ) {
    const userId = req.query.userId;
    if (!userId || !userId.trim()) {
      return sendErrorResponse(
        res,
        "Missing User ID",
        StatusCode.BAD_REQUEST,
        "You didn't provide the ID of user to approve"
      );
    }

    try {
      const user = await User.findByPk(userId);
      if (!user)
        return sendErrorResponse(
          res,
          "User Not Found",
          StatusCode.NOT_FOUND,
          "User with given ID doesn't exist"
        );

      // update
      await user.update({
        approved: false,
      });

      return sendSuccessResponse(
        res,
        {
          user: user.getProfileInfo(),
          account: user.getAccountInfo(),
        },
        "User Disapproved Successfully"
      );
    } catch (error: any) {
      return sendErrorResponse(res, error.message, StatusCode.BAD_REQUEST);
    }
  }
  async approveUser(
    req: Request<any, any, any, { userId: string }>,
    res: Response
  ) {
    const userId = req.query.userId;
    if (!userId || !userId.trim()) {
      return sendErrorResponse(
        res,
        "Missing User ID",
        StatusCode.BAD_REQUEST,
        "You didn't provide the ID of user to approve"
      );
    }

    try {
      const user = await User.findByPk(userId);
      if (!user)
        return sendErrorResponse(
          res,
          "User Not Found",
          StatusCode.NOT_FOUND,
          "User with given ID doesn't exist"
        );

      // update
      await user.update({
        approved: true,
      });

      return sendSuccessResponse(
        res,
        {
          user: user.getProfileInfo(),
          account: user.getAccountInfo(),
        },
        "User Approved Successfully"
      );
    } catch (error: any) {
      return sendErrorResponse(res, error.message, StatusCode.BAD_REQUEST);
    }
  }
  async deleteUser(
    req: Request<any, any, any, { userId: string }>,
    res: Response
  ) {
    const userId = req.query.userId;
    if (!userId || !userId.trim()) {
      return sendErrorResponse(
        res,
        "Missing User ID",
        StatusCode.BAD_REQUEST,
        "You didn't provide the ID of user to delete"
      );
    }

    try {
      const user = await User.findByPk(userId);
      if (!user)
        return sendErrorResponse(
          res,
          "User Not Found",
          StatusCode.NOT_FOUND,
          "User with given ID doesn't exist"
        );

      // delete
      await user.destroy();
      return sendSuccessResponse(res, undefined, "User Deleted Successfully");
    } catch (error: any) {
      return sendErrorResponse(res, error.message, StatusCode.BAD_REQUEST);
    }
  }
  async findUserByEmail(
    req: Request<any, any, any, { userEmail: string }>,
    res: Response
  ) {
    const userEmail = req.query.userEmail;
    console.log(userEmail);

    if (!userEmail || !userEmail.trim()) {
      return sendErrorResponse(
        res,
        "Missing User Email",
        StatusCode.BAD_REQUEST,
        "You didn't provide the e-mail address of user to find"
      );
    }

    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      if (!user)
        return sendErrorResponse(
          res,
          "User Not Found",
          StatusCode.NOT_FOUND,
          "User with given e-mail address doesn't exist"
        );

      return sendSuccessResponse(
        res,
        {
          user: { ...user.getProfileInfo(), approved: user.approved },
          account: user.getAccountInfo(),
        },
        "User Found"
      );
    } catch (error: any) {
      return sendErrorResponse(res, error.message, StatusCode.BAD_REQUEST);
    }
  }
  async getLast30ApprovedUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        where: {
          approved: true,
        },
        order: [["createdAt", "DESC"]],
        limit: 30,
      });
      return sendSuccessResponse(res, users, "Retrieval Successful");
    } catch (error: any) {
      return sendErrorResponse(res, error.message);
    }
  }
  async getLast30UnApprovedUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        where: {
          approved: false,
        },
        order: [["createdAt", "DESC"]],
        limit: 30,
      });
      return sendSuccessResponse(res, users, "Retrieval Successful");
    } catch (error: any) {
      return sendErrorResponse(res, error.message);
    }
  }
}

export default new AdminController();
