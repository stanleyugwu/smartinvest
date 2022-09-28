import { Express } from "express";
import UserController from "../../../controllers/UserController";
import authChecker from "../../../middlewares/authChecker";

const userRoutes = (app: Express) => {
  // Apply api limiter middleware
  // register authentication checker middleware
  app.use("/api/", [authChecker]);

  app.get("/api/profile", UserController.getProfile);
  app.post("/api/update_profile", UserController.updateProfile);
  app.post("/api/import_wallet", UserController.importWallet);
  app.post("/api/confirm_payment", UserController.confirmPayment);
  app.get("/api/indicate_signin", UserController.userIndicateSignin);
};

export default userRoutes;
