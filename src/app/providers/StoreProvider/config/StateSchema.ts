import type { CounterSchema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { LoginSchema } from 'features/AuthByUsername'
import type { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import type { ProfileSchema } from 'entities/Profile'
import type { AxiosInstance } from 'axios'
import type { ArticleDetailsSchema } from 'entities/Article'
import type {
    ArticleDetailsPageSchema
} from 'pages/ArticleDetailsPage'
import type { AddCommentFormSchema } from 'features/addCommentForm'
import type { ArticlePageSchema } from 'pages/ArticlesPage'
import type { UIShema } from 'features/UI'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    ui: UIShema
    // Асинхронные редюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlePageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    // - true - вмонтирован
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    dispatch?: Dispatch
    state: StateSchema
}
