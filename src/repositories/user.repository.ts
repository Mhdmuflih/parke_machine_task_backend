import { IUser } from "../interfaces/modelsInterfaces/models";
import { IUserRepository } from "../interfaces/repositoriesInterfaces/IUserRepository";
import { BaseRepository } from "./base.repository";
import User from "../models/user.model";

class UserRepository extends BaseRepository<IUser> implements IUserRepository {
    constructor() {
        super(User);
    }

    async findByEmail(email: string): Promise<IUser | null> {
        try {
            return this.findOne({ email });
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error in findByEmail: ${error.message}`);
            }
            throw new Error("Unknown error in findByEmail");
        }
    }

    async createUser(data: any): Promise<IUser | null> {
        try {
            return this.create(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error in createUser: ${error.message}`);
            }
            throw new Error("Unknown error in create user");
        }
    }
}

export default new UserRepository();