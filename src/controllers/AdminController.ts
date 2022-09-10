import { Request, Response } from "express";
import Admin from "../models/Admin";
import User from "../models/User";
import { sendErrorResponse, sendSuccessResponse } from "../modules/utils";

class AdminController {
  updateAccount(req: Request, res: Response) {}

  async countApproveUsers(req: Request, res: Response) {
    try {
      const numOfApprvdUsers = await User.count({where:{
        approved:true
      }});
      return sendSuccessResponse(res,numOfApprvdUsers,"Retrieval Successful")
    } catch (error:any) {
      return sendErrorResponse(res, error.message)
    }
  }

  async countUnapprovedUsers(req: Request, res: Response) {
    try {
      const numOfUnApprvdUsers = await User.count({where:{
        approved:false
      }});
      return sendSuccessResponse(res,numOfUnApprvdUsers,"Retrieval Successful")
    } catch (error:any) {
      return sendErrorResponse(res, error.message)
    }
  }

  async countAllUsers(req: Request, res: Response) {
    try {
      const numOfUsers = await User.count();
      return sendSuccessResponse(res,numOfUsers,"Retrieval Successful")
    } catch (error:any) {
      return sendErrorResponse(res, error.message)
    }
  }
  approveUser(req: Request, res: Response) {}
  deleteUser(req: Request, res: Response) {}
  findUserByEmail(req: Request, res: Response) {}
}

export default new AdminController();
