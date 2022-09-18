import { Express } from "express";
import AdminController from "../../../controllers/AdminController";
import adminChecker from "../../../middlewares/adminChecker";
import RateLimit from "express-rate-limit";

const apiLimiter = RateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
  message: "Too many requests from this IP, please try again after 10 minutes.",
});

const adminRoutes = (app: Express) => {
    // register admin checker middleware
  app.use("/api/admin/",adminChecker);

  app.post("/api/admin/update_user_account", AdminController.updateUserAccount);
  app.get("/api/admin/total_approved_users", AdminController.countApproveUsers);
  app.get("/api/admin/total_unapproved_users", AdminController.countUnapprovedUsers);
  app.get("/api/admin/find_user", AdminController.findUserByEmailOrName);
  // Position of below middleware is intentional so not to block above endpoints with api limiter
  app.use("/api/", [apiLimiter]);
  app.get("/api/admin/total_users", AdminController.countAllUsers);
  app.get("/api/admin/approve_user", AdminController.approveUser);
  app.get("/api/admin/disapprove_user", AdminController.disApproveUser);
  app.delete("/api/admin/delete_user", AdminController.deleteUser);
  app.get("/api/admin/latest_approved_users", AdminController.getLast30ApprovedUsers);
  app.get("/api/admin/latest_unapproved_users", AdminController.getLast30UnApprovedUsers);
};

export default adminRoutes;