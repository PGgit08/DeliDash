import { createContext } from 'react';
import { ReactNode } from 'react';
import { MOCK_APPCTX } from 'src/mock';
import Deli_ID from 'types/Deli_ID';

/**
 * Defines Data in AppCtx
 * @property {Deli_ID} selectedDeli - The Deli_ID of the current selected deli
 */
interface IAppCtx {
    selectedDeli: Deli_ID | null;
}

const AppCtx = createContext<IAppCtx | null>(null);

/**
 * Provides children components with the AppCtx Context 
 */
function AppCtxProvider({ children }: { children?: ReactNode }) {
    return (
        <AppCtx.Provider value = {MOCK_APPCTX}>
            { children }
        </AppCtx.Provider>
    );
}

export { AppCtx, AppCtxProvider }; 
