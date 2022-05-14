import React from 'react';
import { useInjection } from '../Hooks/ioc.react';
import { IGreetingRepo } from '../Repository/contracts/IGreeting.repo';

export const Hello: React.FC = () => {
    const greetingRepo = useInjection<IGreetingRepo<any>>('greeting_v1');

    return (
        <>
            <h1 className='text-3xl font-bold underline text-center'>{greetingRepo.sayHello()}</h1>
        </>
    );
};