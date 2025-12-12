import { Request, Response } from "express";
import { IAuthController } from "../interfaces/controllersInterfaces/IAuthController";
import { IAuthService } from "../interfaces/servicesInterfaces/IAuthService";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/messages";

export class AuthController implements IAuthController {
    constructor(private authService: IAuthService) { };

    async register(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                res.status(HTTP_STATUS.BAD_REQUEST).json({ success: false, message: MESSAGES.ALL_FIELD_REQUIRED });
                return;
            }
            await this.authService.register(req.body);
            res.status(HTTP_STATUS.CREATED).json({ success: true, message: "User Registred Successfully." });
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Failed to registration controller.", error.message);
                res.status(HTTP_STATUS.BAD_REQUEST).json({ success: false, message: error.message });
            }
            console.log(" Unknown error during registration.");
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, message: "An Unknown error occured while registration." });
        }
    }

}