import type { ReducersMapObject } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import type { StateSchema } from './StateSchema'
import { counterReducer } from '../../../../entities/Counter/model/slice/counterSlice'
import { userReducer } from '../../../../entities/User'
import { loginReducer } from 'features/AuthByUsername'

export function createReduxStore (initialState?: StateSchema) {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootRedusers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
