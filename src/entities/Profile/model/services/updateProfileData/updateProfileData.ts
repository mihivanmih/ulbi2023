import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { Profile } from '../../types/profile'
import { ValidateProfileError } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, { ts?: string }, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi

        const formData = getProfileForm(getState())

        const errors = validateProfileData(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData)
            return response.data
        } catch (e) {
            console.log('error', e)
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)
