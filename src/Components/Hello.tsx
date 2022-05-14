import React from 'react';
import { IProvider } from '../Helpers/providers';
import { useInjection } from '../Hooks/ioc.react';

export const Hello: React.FC = () => {
    const provider = useInjection<IProvider<string>>('nameProvider');

    return (
        <h1>Hello {provider.provide()}!</h1>
    );
};