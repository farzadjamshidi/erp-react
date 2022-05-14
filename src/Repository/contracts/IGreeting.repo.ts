import { IRepository } from "./IRepository";

export abstract class IGreetingRepo<T> extends IRepository<T> {
    public abstract sayHello(): string;
}