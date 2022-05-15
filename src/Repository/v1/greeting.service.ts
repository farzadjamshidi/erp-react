import { injectable } from "inversify";
import { BaseResponse } from "../../Models/BaseResponse";
import { IGreetingRepo } from "../contracts/IGreeting.repo";

@injectable()
export class GreetingService_v1 implements IGreetingRepo<any>{
    sayHello(): string {
        return "Hello from Greeting Service";
    }
    getAll(): Promise<BaseResponse<any[]>> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    create(item: any): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    update(id: number, item: any): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
  

}