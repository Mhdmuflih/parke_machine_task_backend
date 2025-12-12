export interface IBaseRepository {
    findOne(filter: any): Promise<any | null>
    create(data: Partial<any>): Promise<any | null>;
}