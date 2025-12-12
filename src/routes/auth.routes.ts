import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import userRepository from "../repositories/user.repository";

const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const Auth_Routes: Router = Router();

Auth_Routes.post("/register", authController.register.bind(authController));
Auth_Routes.post("/login", authController.login.bind(authController));
Auth_Routes.post("/refresh-token", authController.validateRefreshToken.bind(authController));

export default Auth_Routes;