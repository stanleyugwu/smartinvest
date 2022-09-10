import User, { Currency } from "../models/User";
import { Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../modules/utils";
import StatusCode from "../status";
import Admin from "../models/Admin";

export type SignupBody = {
  fullname: string;
  email: string;
  phone: string;
  currency: Currency;
  country: string;
  password: string;
};

class AuthController {
  async userSignin(req: Request, res: Response) {
    const { email, password } = req.body;

    // assert login creds validity
    if (!email || !password) {
      return sendErrorResponse(
        res,
        "Invalid Credentials",
        StatusCode.BAD_REQUEST,
        "Provide login credentials"
      );
    }

    try {
      const user = await User.scope("withPasswordScope").findOne({ where: { email }});

      // check user existence
      if (!user) {
        return sendErrorResponse(
          res,
          "Account not found",
          StatusCode.NOT_FOUND,
          "You have not registered yet"
        );
      }

      // validate password
      const isPasswordValid = user.verifyPassword(password);
      if (!isPasswordValid) {
        return sendErrorResponse(
          res,
          "Invalid Password",
          StatusCode.BAD_REQUEST,
          "The password provided is incorrect"
        );
      }

      // check if user is approved
      if (!user.approved) {
        return sendErrorResponse(
          res,
          "Account Not Approved",
          StatusCode.FORBIDDEN,
          "Your account has not been approved yet. Wait for approval and contact support if the approval takes longer"
        );
      }

      // user is approved and login cred is correct, sign him in
      const accessToken = user.generateToken();
      return sendSuccessResponse(res, {
        token: `Bearer ${accessToken}`,
        data: {
          profile: user.getProfileInfo(),
          account: user.getAccountInfo(),
        },
      }, "Sign-In Successful");
    } catch (error: any) {
      return sendErrorResponse(res, error.message, StatusCode.FORBIDDEN);
    }
  }
  async adminSignin(req: Request, res: Response) {
    const { email, password } = req.body;

    // assert login creds validity
    if (!email || !password) {
      return sendErrorResponse(
        res,
        "Invalid Credentials",
        StatusCode.BAD_REQUEST,
        "Provide login credentials"
      );
    }

    try {
      const admin = await Admin.scope("withPasswordScope").findOne({ where: { email }});

      // check user existence
      if (!admin) {
        return sendErrorResponse(
          res,
          "Incorrect Credentials",
          StatusCode.NOT_FOUND,
          "You are not an admin"
        );
      }

      // validate password
      const isPasswordValid = admin.verifyPassword(password);
      if (!isPasswordValid) {
        return sendErrorResponse(
          res,
          "Incorrect Credentials",
          StatusCode.BAD_REQUEST,
          "The password provided is incorrect"
        );
      }

      // user is approved and login cred is correct, sign him in
      const accessToken = admin.generateToken();
      // we omit password frmo returned data
      const {password:adminPass,...otherFields} = admin.toJSON();
      return sendSuccessResponse(res, {
        token: `Bearer ${accessToken}`,
        data: otherFields,
      }, "Sign-In Successful");
    } catch (error: any) {
      return sendErrorResponse(res, error.message, StatusCode.FORBIDDEN);
    }
  }
  async userSignup(req: Request<any, any, SignupBody>, res: Response) {
    const sendError = sendErrorResponse;
    let { country, currency, email, fullname, password, phone } = req.body;

    // check fields
    email = email?.trim();
    fullname = fullname?.trim();
    password = password?.trim();
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
      const user = await User.findOne({ where: { email } });
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
      const {password:userPassword,...otherFields} = newUser.toJSON()
      sendSuccessResponse(
        res,
        otherFields,
        "Registeration Successful, Await confirmation from admin"
      );

      // send welcome email after returing response so it doesnt block response return
      //TODO: add emailing logic
    } catch (error: any) {
      return sendError(res, error.message, StatusCode.BAD_REQUEST);
    }
  }
}

export default new AuthController();
