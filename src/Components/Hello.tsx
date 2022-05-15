import React from 'react';
import { useTranslation } from "react-i18next";
import { useInjection } from '../Hooks/ioc.react';
import { IGreetingRepo } from '../Repository/contracts/IGreeting.repo';

export const Hello: React.FC = () => {
    const greetingRepo = useInjection<IGreetingRepo<any>>('greeting_v1');
    const { t: translate } = useTranslation('common');

    return (
        <>
            <h1 className='text-3xl font-bold underline text-center'>{greetingRepo.sayHello()}</h1>
            <h1>{translate('welcome.title', {framework:'i18n'})}</h1>
        </>
    );
};