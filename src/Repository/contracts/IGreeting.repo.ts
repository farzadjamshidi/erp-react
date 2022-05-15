import { IRepository } from "./IRepository";
export interface IGreetingRepo<T> extends IRepository<T> {
    sayHello(): string;
}
