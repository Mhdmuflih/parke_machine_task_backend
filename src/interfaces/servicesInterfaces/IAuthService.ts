import { IUser } from "../modelsInterfaces/models";

export interface IAuthService {
    register(data: any): Promise<IUser | null>;
}