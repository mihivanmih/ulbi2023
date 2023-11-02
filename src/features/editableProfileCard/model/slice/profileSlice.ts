import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { ProfileSchema } from '../types/editableProfileCardSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { Profile } from '@/entities/Profile'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    data: undefined,
    error: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
            state.validateErrors = undefined
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>
            ) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state, action) => {
                state.validateErrors = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>
            ) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = true
                state.validateErrors = undefined
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice