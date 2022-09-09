import { Router, Express } from "express";
import PublicRoutes from "./public";
import UserRoutes from './private/user';
import AdminRoutes from './private/admin';

export default (app: Express) => {
  PublicRoutes(app);
  UserRoutes(app);
  AdminRoutes(app);

  // important if behind a proxy to ensure client IP is passed to req.ip
  // app.enable('trust proxy')

};
