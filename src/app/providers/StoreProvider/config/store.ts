import type { CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import type { StateSchema, ThunkExtraArg } from './StateSchema'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { createReducerManager } from 'app/providers/StoreProvider/config/reduserManager'
import { $api } from 'shared/api/api'
import { uiReducer } from '../../../../features/UI'
import { rtkApi } from 'shared/api/rtkApi'

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    }

    const reducerManager = createReducerManager(rootRedusers)

    const extraArg: ThunkExtraArg = {
        api: $api
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        }).concat(rtkApi.middleware)
    })

    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
