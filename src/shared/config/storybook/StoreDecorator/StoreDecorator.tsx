import type { Story } from '@storybook/react'
import type { StateSchema } from 'app/providers/StoreProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'
import { profileReducer } from 'entities/Profile'

const defaulAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaulAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
