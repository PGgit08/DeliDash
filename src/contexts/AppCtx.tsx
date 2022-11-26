import { createContext } from 'react';
import DeliInfo from 'types/DeliInfo';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface IAppCtx {
    delis: DeliInfo[];
    selectedDeli: DeliInfo;
}

const AppCtx = createContext<IAppCtx | null>(null);

function AppCtxProvider({ children }: { children?: ReactNode }) {
    return (
        <View>
            { children }
        </View>
    );
}

export { AppCtx, AppCtxProvider }; 
