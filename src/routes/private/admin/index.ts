import { Express } from "express";
import AdminController from "../../../controllers/AdminController";
import adminChecker from "../../../middlewares/adminChecker";

const adminRoutes = (app: Express) => {
    // register admin checker middleware
  app.use("/api/admin/",adminChecker);

  app.post("/api/admin/update_user_account:userId", AdminController.updateAccount);
  app.get("/api/admin/total_approved_users", AdminController.countApproveUsers);
  app.get("/api/admin/total_unapproved_users", AdminController.countUnapprovedUsers);
  app.get("/api/admin/total_users", AdminController.countAllUsers);
  app.put("/api/admin/approve_user:userId", AdminController.approveUser);
  app.delete("/api/admin/delete_user:userId", AdminController.deleteUser);
  app.get("/api/admin/find_user:userEmail", AdminController.findUserByEmail);
};

export default adminRoutes;