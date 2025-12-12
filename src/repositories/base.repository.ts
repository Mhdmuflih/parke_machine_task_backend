import { Document, Model } from "mongoose";
import { IBaseRepository } from "../interfaces/repositoriesInterfaces/IBaseRepository";

export class BaseRepository<T extends Document> implements IBaseRepository {
    constructor(private readonly model: Model<T>) { }


    async findOne(filter: any): Promise<T | null> {
        try {
            return await this.model.findOne(filter).exec();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`An unknown error occurred in findOne: ${error.message}`);
            }
            throw new Error("An unknown non-error value was thrown in findOne");
        }
    }

    async create(data: Partial<T>): Promise<T | null> {
        try {
            const entity = new this.model(data);
            return await entity.save();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`An unknown error occurred in create: ${error.message}`);
            }
            throw new Error("An Unknown non-error value was throw in create.");
        }
    }
}