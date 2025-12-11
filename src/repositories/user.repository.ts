import { IUser } from "../interfaces/modelsInterfaces/models";
import { IUserRepository } from "../interfaces/repositoriesInterfaces/IUserRepository";
import { BaseRepository } from "./base.repository";
import User from "../models/user.model";


export class UserRepository extends BaseRepository<IUser> implements IUserRepository {
    constructor() {
        super(User);
    }
} 