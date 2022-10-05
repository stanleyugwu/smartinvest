import User, { Currency } from "../models/User";
import { Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../modules/utils";
import StatusCode from "../status";
import Admin from "../models/Admin";
import mailer from "../services/mailer";

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
      const user = await User.scope("withPasswordScope").findOne({
        where: { email },
      });

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
          StatusCode.UNAUTHORIZED,
          "Your account has not been approved yet. Wait for approval and contact support if the approval takes longer"
        );
      }

      // user is approved and login cred is correct, sign him in
      const accessToken = user.generateToken();

      return sendSuccessResponse(
        res,
        {
          token: accessToken,
          data: {
            profile: user.getProfileInfo(),
            account: user.getAccountInfo(),
          },
        },
        "Sign-In Successful"
      );
    } catch (error: any) {
      return sendErrorResponse(
        res,
        error.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
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
        "Provide valid login credentials"
      );
    }

    try {
      const admin = await Admin.scope("withPasswordScope").findOne({
        where: { email },
      });

      // check user existence
      if (!admin) {
        return sendErrorResponse(
          res,
          "Incorrect Credentials",
          StatusCode.NOT_FOUND,
          "Provide correct login credentials"
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
      const { password: adminPass, ...otherFields } = admin.toJSON();
      return sendSuccessResponse(
        res,
        {
          token: accessToken,
          data: otherFields,
        },
        "Sign-In Successful"
      );
    } catch (error: any) {
      return sendErrorResponse(
        res,
        error.message,
        StatusCode.INTERNAL_SERVER_ERROR
      );
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
        accountManager: "AD",
        balance: 0,
        credit: 0,
        deposit: 0,
        profit: 0,
        tradingPercentage: 0,
        withdrawal: 0,
      });

      // creation successful, send welcome email async
      const firstName = fullname.split(" ")[0];
      const welcomeEmailBody = `
<div style="background-color:#272f3d;height:400px;width:100%;padding-top:10px;padding:5px">
<center>
<p style="color:white;text-align:justify">
</p><h3 style="color:white">Welcome, ${fullname}</h3>
<span style="color:white">
We're excited to have you get started. Thank you for joining our community and signing up for the world's leading crypto trading platform. We're on a mission to provide financial freedom for users like you with the right education and resources to make your trading journey seamless and safe.
</span><p></p>
<br>
 <span style="color:white">For more enquiries kindly
contact us at <a href="mailto:support@smartproinvest.com" rel="noreferrer" target="_blank">support@smartproinvest.com</a><br>
 Website Link : <a href="https://www.smartproinvest.com" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.smartproinvest.com&amp;source=gmail&amp;ust=1663616644898000&amp;usg=AOvVaw1gSMbqQNFGHImc8lgGSQGC">https://www.smartproinvest.com</a></span><br>
<br>
 <span style="color:white">Hearty Cheers,<br>
Smart Pro Invest Team</span><br>
<img src="https://drive.google.com/uc?export=view&id=16So4hnh1E9_6Z2mVWYo1qUYYG6yzzpS1" style="width:120px" class="CToWUd" data-bit="iit">
</center>`;

      mailer()
        .sendMail({
          from: "Smart Pro Invest support@smartproinvest.com", // sender address
          to: email, // list of receivers
          subject: `Welcome Aboard! ${firstName}`, // Subject line
          html: welcomeEmailBody, // html body
        })
        .catch((error) => {
          console.log("WELCOME EMAIL SEND ERROR");
          console.log(error);
        });

      // send admin notification
      mailer(process.env.INFO_EMAIL_USERNAME, process.env.INFO_EMAIL_PASSWORD)
        .sendMail({
          from: "Smart Pro Invest info@smartproinvest.com", // sender address
          to: process.env.SUPPORT_EMAIL_USERNAME, // list of receivers
          subject: `${newUser.fullname} just registered on your website`, // Subject line
          html: `<div>
          <h4>Signup Details</h4>
          <b>email:${newUser.email}</b><br>
          <b>username:${newUser.fullname}</p><br>
          <b>country:${newUser.country}</p><br>
          <b>phone:${newUser.phone}</p><br>
          <b>signup time:${new Date()}</b>
          </div>`, // html body
        })
        .catch((error) => {
          console.log("SIGN-UP EMAIL SEND ERROR");
          console.log(error);
        });

      // send success response
      const { password: userPassword, ...otherFields } = newUser.toJSON();
      sendSuccessResponse(
        res,
        otherFields,
        "Registeration Successful, Await confirmation from admin"
      );

      // send welcome email after returing response so it doesnt block response return
    } catch (error: any) {
      return sendError(res, error.message, StatusCode.BAD_REQUEST);
    }
  }
}

export default new AuthController();
