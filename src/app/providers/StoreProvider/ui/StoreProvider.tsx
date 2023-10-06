import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import type { DeepPartial } from '@reduxjs/toolkit'

interface indexProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: indexProps) => {
    const store = createReduxStore(initialState as StateSchema)

    return (
        <Provider store={store}>
            { children}
        </Provider>
    )
}