import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import type {
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
} from '@/app/providers/StoreProvider'
import type { Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers()
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey]
            // Добавляем новый редюсер только если его нет
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    // @ts-expect-error
                    ([name, reducer]: ReducersListEntry) => {
                        store.reducerManager.remove(name)
                        dispatch({ type: `@DESTROY ${name} reducer` })
                    },
                )
            }
        }
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])

    return <>{children}</>
}
