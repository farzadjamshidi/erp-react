import { Container } from 'inversify';
import { IGreetingRepo } from '../Repository/contracts/IGreeting.repo';
import { GreetingService_v1 } from '../Repository/v1/greeting.service';

export const container = new Container();
container.bind<IGreetingRepo<any>>('greeting_v1').to(GreetingService_v1);