import { createSlice } from '@reduxjs/toolkit'
import type { ProfileSchema } from '../../index'

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
        setAutData: () => {
            console.log('1')
        }
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
