// src/routes/index.ts
import express, { Request, Response, NextFunction } from 'express';
import HelloWorldRouteController from '../controllers/HelloWorldRouteController';
import LoginController from '../controllers/LoginController';
import WSController from '../controllers/WSController';
import roleRoutes from "./roleRoutes";
import roleAuthorityRoutes from "./roleAuthorityRoutes";
import menuDefinitionRoutes from "./menuDefinitionRoutes";
import menuAuthorityRoutes from "./menuAuthorityRoutes";
import roleMenuRoutes from "./roleMenuRoutes";

import auth from "../../shared/middlewares/authMiddleware";
import { ENV_CONFIG } from '../../config/environment';

const router = express.Router();

// Public routes
router.get('/', (req: Request, res: Response) => {
  const env = process.env.NODE_ENV || 'development';
  res.render('index', { title: `Hello World from ${ENV_CONFIG.APP_NAME} in ${env} mode` });
});
router.get('/content', (req: Request, res: Response) => {
  res.render('index', { title: 'Hello World' });
});
router.get('/api', HelloWorldRouteController.hola);
router.post('/login', LoginController.login);

// Protected routes
router.all('/ws/*', auth(), WSController.index);

// Entity routes
router.use("/roles", roleRoutes);
router.use("/role-authorities", roleAuthorityRoutes);
router.use("/menus", menuDefinitionRoutes);
router.use("/menu-authorities", menuAuthorityRoutes);
router.use("/role-menus", roleMenuRoutes);

// Error handling middleware
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default router;
