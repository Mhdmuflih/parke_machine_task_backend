import { MESSAGES } from "../constants/messages";
import { IUser } from "../interfaces/modelsInterfaces/models";
import { IUserRepository } from "../interfaces/repositoriesInterfaces/IUserRepository";
import { IAuthService } from "../interfaces/servicesInterfaces/IAuthService";
import { passwordHashing } from "../utilities/bcrypt";

export class AuthService implements IAuthService {
    constructor(private userRepository: IUserRepository) { }

    async register(data: any): Promise<any> {
        try {
            const existingUser = await this.userRepository.findByEmail(data.email);
            if (existingUser) {
                throw new Error(MESSAGES.ALLREADY_EXISTED_EMAIL);
            }
            const hashedPassword: string | undefined = await passwordHashing(data.password);
            const user: any = {
                name: data.name,
                email: data.email,
                password: hashedPassword as string,
            }
            const createUser: IUser | null = await this.userRepository.createUser(user);
            if (!createUser) {
                throw new Error(MESSAGES.FAILED_TO_CREATE);
            }
            return createUser;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Failed to registration service.", error.message);
                throw new Error(`Error creating user servcie ${error.message}`);
            }
        }
    }
}