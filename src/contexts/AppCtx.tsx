import { createContext } from 'react';
import DeliInfo from 'types/DeliInfo_Preview';
import { ReactNode } from 'react';
import { View } from 'react-native';
import Deli_ID from 'types/Deli_ID';

interface IAppCtx {
    selectedDeli: Deli_ID;
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
