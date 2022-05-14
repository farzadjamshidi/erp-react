import { BaseResponse } from "../../Models/BaseResponse";

export abstract class IRepository<T> {
    public abstract getAll(): Promise<BaseResponse<T[]>>;
    public abstract getById(id: number): Promise<BaseResponse<T>>;
    public abstract create(item: T): Promise<BaseResponse<T>>;
    public abstract update(id: number, item: T): Promise<BaseResponse<T>>;
    public abstract delete(id: number): Promise<BaseResponse<T>>;
}