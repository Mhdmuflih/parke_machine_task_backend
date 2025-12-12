import { IUser } from "../modelsInterfaces/models";

export interface IUserRepository {
    findByEmail(email: string): Promise<IUser | null>;
    createUser(data: any): Promise<IUser | null>;
}