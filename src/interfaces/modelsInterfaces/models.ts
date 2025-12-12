import { Date, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    isLocked?: boolean;
    createdAt?: Date;
}