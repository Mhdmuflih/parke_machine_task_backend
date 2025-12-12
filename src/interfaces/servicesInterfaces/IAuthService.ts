import { IUser } from "../modelsInterfaces/models";

export interface IAuthService {
    register(data: any): Promise<IUser | null>;
    login(loginData: any): Promise<{ accessToken: string, refreshToken: string, userData: IUser }>;
    validateRefreshToken(refreshToken: string): Promise<{ accessToken: string, refreshToken: string, userData: IUser }>;
}