import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { userActions } from '../../../../../entities/User'

interface loginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAutData(response.data))

            return response.data
        } catch (e) {
            console.log('error', e)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
