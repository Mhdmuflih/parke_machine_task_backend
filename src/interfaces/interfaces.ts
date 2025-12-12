import { JwtPayload } from "jsonwebtoken";

export interface IAuthTokenPayload extends JwtPayload {
    userId: string;
};