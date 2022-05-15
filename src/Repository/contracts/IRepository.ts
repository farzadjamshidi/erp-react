import { BaseResponse } from "../../Models/BaseResponse";

export interface IRepository<T> {
    getAll(): Promise<BaseResponse<T[]>>;
    getById(id: number): Promise<BaseResponse<T>>;
    create(item: T): Promise<BaseResponse<T>>;
    update(id: number, item: T): Promise<BaseResponse<T>>;
    delete(id: number): Promise<BaseResponse<T>>;
}