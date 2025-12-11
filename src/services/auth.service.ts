import { IUserRepository } from "../interfaces/repositoriesInterfaces/IUserRepository";
import { IAuthService } from "../interfaces/servicesInterfaces/IAuthService";

export class AuthService implements IAuthService {
    constructor(private userRepository: IUserRepository) { }

    async register() {
        try {

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Failed to registration service.", error.message);
                throw new Error(`Error creating user servcie ${error.message}`);
            }
        }
    }
}