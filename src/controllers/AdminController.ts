import { Request, Response } from "express";
import Admin from "../models/Admin";

class AdminController {
  updateAccount(req: Request, res: Response) {}

  countApproveUsers(req: Request, res: Response) {}

  countUnapprovedUsers(req: Request, res: Response) {}

  countAllUsers(req: Request, res: Response) {}
  approveUser(req: Request, res: Response) {}
  deleteUser(req: Request, res: Response) {}
  findUserByEmail(req: Request, res: Response) {}
}

export default new AdminController();
