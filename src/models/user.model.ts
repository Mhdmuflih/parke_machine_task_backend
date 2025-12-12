import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/modelsInterfaces/models";

const userSchema: Schema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isLocked: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

export default model<IUser>("User", userSchema);