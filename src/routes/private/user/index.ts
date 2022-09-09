import { Express } from "express";
import UserController from "../../../controllers/UserController";
import authChecker from "../../../middlewares/authChecker";
import RateLimit from "express-rate-limit";

const apiLimiter = RateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
  message: "Too many requests from this IP, please try again after 10 minutes.",
});

const userRoutes = (app: Express) => {
  // Apply api limiter middleware
  // register authentication checker middleware
  app.use("/api/", [apiLimiter, authChecker]);

  app.get("/api/profile", UserController.getProfile);
  app.post("/api/update_profile", UserController.updateProfile);
  app.post("/api/import_wallet", UserController.importWallet);
};

export default userRoutes;
