import User, { Currency } from "../models/User";
import { Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../modules/utils";
import StatusCode from "../status";

type SignupBody = {
  fullname: string;
  email: string;
  phone: string;
  currency: Currency;
  country: string;
  password: string;
};

class AuthController {
  async userSignin(req: Request, res: Response) {}
  async adminSignin(req: Request, res: Response) {}
  async userSignup(req: Request<any, any, SignupBody>, res: Response) {
    const sendError = sendErrorResponse;
    const { country, currency, email, fullname, password, phone } = req.body;

    // check fields
    if (!email || !fullname || !password) {
      return sendError(
        res,
        "Invalid Request",
        StatusCode.BAD_REQUEST,
        "Provide all required fields"
      );
    }

    try {
      // check if email is available
      const user = await User.findOne({ where: { $email$: email } });
      if (user) {
        return sendError(
          res,
          "Email Address Taken",
          StatusCode.UNAUTHORIZED,
          "Email address is already being used by another user"
        );
      }

      // email available, create user
      const newUser = await User.create({
        country,
        currency,
        email,
        fullname,
        password,
        phone,
        approved: false,
      });

      // creation successful
      console.log('new user -> ',newUser);
      sendSuccessResponse(
        res,
        newUser.toJSON(),
        "Registeration Successful, Await for confirmation"
      );

      // send welcome email after returing response so it doesnt block response return
      //TODO: add emailing logic
    } catch (error: any) {
      return sendError(res, error.message, StatusCode.BAD_REQUEST);
    }
  }
}

export default new AuthController();
