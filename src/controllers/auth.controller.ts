import { Request, Response } from "express";
import { IAuthController } from "../interfaces/controllersInterfaces/IAuthController";
import { IAuthService } from "../interfaces/servicesInterfaces/IAuthService";
import { HTTP_STATUS } from "../constants/http-status";

export class AuthController implements IAuthController {
    constructor(private authService: IAuthService) { };

    async register(req: Request, res: Response): Promise<void> {
        try {

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