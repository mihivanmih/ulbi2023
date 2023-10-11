import { createAsyncThunk } from '@reduxjs/toolkit'
import type { User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { userActions } from '../../../../../entities/User'
import type { ThunkConfig } from 'app/providers/StoreProvider'

interface loginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAutData(response.data))

            // extra.navigate('/about')

            return response.data
        } catch (e) {
            console.log('error', e)
            return rejectWithValue('error')
        }
    }
)
