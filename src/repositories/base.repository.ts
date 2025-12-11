import { Document, Model } from "mongoose";
import { IBaseRepository } from "../interfaces/repositoriesInterfaces/IBaseRepository";

export class BaseRepository<T extends Document> implements IBaseRepository {
    constructor(private readonly model: Model<T>) { }
}