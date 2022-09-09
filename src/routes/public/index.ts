import { Request, Response, Express } from "express";
import AuthController from '../../controllers/AuthController';
import path from 'path';
/**
 * Serves index.html
 */
const userHtmlController = (req: Request, res: Response) => {
  const indexHtmlPath = path.resolve("frontend/build/index.html");
  res.status(200).sendFile(indexHtmlPath);
};

/**
 * Serves admin.html
 */
const adminHtmlController = (req: Request, res: Response) => {
  const indexHtmlPath = path.resolve("frontend/build/admin.html");
  res.status(200).sendFile(indexHtmlPath);
};

const publicRoutes = (app: Express) => {
  app.get("/", userHtmlController);
  app.get("/admin", adminHtmlController);

  app.post("/auth/signin", AuthController.userSignin);
  app.post("/auth/admin_signin", AuthController.adminSignin);
  app.post("/auth/signup", AuthController.userSignup);
};

export default publicRoutes;
