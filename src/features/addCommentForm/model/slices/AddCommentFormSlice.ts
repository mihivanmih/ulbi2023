import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    text: ''
}

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchArticleById.pending, (state, action) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         })
    //         .addCase(fetchArticleById.fulfilled, (
    //             state,
    //             action: PayloadAction<Article>
    //         ) => {
    //             state.isLoading = false
    //             state.data = action.payload
    //         })
    //         .addCase(fetchArticleById.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload
    //         })
    // }
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
