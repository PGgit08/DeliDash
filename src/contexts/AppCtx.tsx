import { Dispatch, createContext, useReducer } from 'react';
import { ReactNode } from 'react';
import { MOCK_APPCTX_STATE, MOCK_DELIDATA_PREVIEW, MOCK_DELILIST } from 'src/mock';
import Deli_ID from 'types/Deli_ID';


const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_DELI_ID':
            return [
                ...state,
                {
                    selectedDeli: action.payload.selectedDeli
                }
            ];
    }   
}


/**
 * Defines State in AppCtx
 * @property {Deli_ID} selectedDeli - The Deli_ID of the current selected deli
 */
export interface AppCtx_State {
    selectedDeli: Deli_ID | null;
}

const AppCtx = createContext<{
    state: AppCtx_State;
    // dispatch: Dispatch<any>;
}>({ state: MOCK_APPCTX_STATE });

/**
 * Provides children components with the AppCtx Context 
 */
function AppCtxProvider({ children }: { children?: ReactNode }) {
    return (
        <AppCtx.Provider value = {{ state: MOCK_APPCTX_STATE }}>
            { children }
        </AppCtx.Provider>
    );
}

export { AppCtx, AppCtxProvider }; 
