import { JwtPayload } from "jsonwebtoken";
import { IUser } from "../modelsInterfaces/models";

export interface IUserRepository {
    findByEmail(email: string): Promise<IUser | null>;
    createUser(data: any): Promise<IUser | null>;
    findById(userId: string | JwtPayload | undefined): Promise<IUser | null>
}