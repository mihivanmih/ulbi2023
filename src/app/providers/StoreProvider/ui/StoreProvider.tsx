import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import type { StateSchema } from '../config/StateSchema'
import type { ReducersMapObject } from '@reduxjs/toolkit'

interface indexProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({
    children,
    initialState,
    asyncReducers,
}: indexProps) => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    )

    console.log('Render')

    return <Provider store={store}>{children}</Provider>
}
