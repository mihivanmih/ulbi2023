import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { Profile } from '../../types/profile'

interface ProfileProps {
    ts?: string
}

export const fetchProfileData = createAsyncThunk<Profile, ProfileProps, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<Profile>('/profile')
            // throw new Error()
            return response.data
        } catch (e) {
            console.log('error', e)
            return rejectWithValue('error')
        }
    }
)
