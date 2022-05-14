
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import type { } from '@mui/lab/themeAugmentation';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { container } from './Configs/ioc';
import { Provider as IocProvider } from './Hooks/ioc.react';

interface Props {
}

const WithAppProviders = (Component: React.ComponentType<any | string>) => (props?: Props) => {
    const WrapperComponent = () => (
        <IocProvider container={container}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StyledEngineProvider injectFirst>
                    <ScopedCssBaseline>
                        <Component {...props} />
                    </ScopedCssBaseline>
                </StyledEngineProvider>
            </LocalizationProvider>
        </IocProvider>
    );

    return WrapperComponent;
};

export default WithAppProviders;
