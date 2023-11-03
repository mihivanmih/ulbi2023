import type { Story } from '@storybook/react'
// todo
import type { StateSchema } from '@/app/providers/StoreProvider'
import { StoreProvider } from '@/app/providers/StoreProvider'
// eslint-disable-next-line test-fsd-2023/public-api-imports-fsd-2023
import { loginReducer } from '@/features/AuthByUsername/model/slice/LoginSlice'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line test-fsd-2023/public-api-imports-fsd-2023
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
// eslint-disable-next-line test-fsd-2023/public-api-imports-fsd-2023
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/AddCommentFormSlice'
// eslint-disable-next-line test-fsd-2023/public-api-imports-fsd-2023
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices'
// eslint-disable-next-line test-fsd-2023/public-api-imports-fsd-2023
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice'

const defaulAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaulAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
