import { injectable } from "inversify";
import { BaseResponse } from "../../Models/BaseResponse";
import { IGreetingRepo } from "../contracts/IGreeting.repo";

@injectable()
export class GreetingService_v1 implements IGreetingRepo<any>{
    public sayHello(): string {
        return "Hello from greeting service!";
    }
    public getAll(): Promise<BaseResponse<any[]>> {
        throw new Error("Method not implemented.");
    }
    public getById(id: number): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    public create(item: any): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    public update(id: number, item: any): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    public delete(id: number): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }

}