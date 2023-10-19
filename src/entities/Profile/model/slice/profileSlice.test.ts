import type { ProfileSchema } from 'entities/Profile'
import { profileActions, profileReducer } from './profileSlice'
import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'
import { updateProfileData, ValidateProfileError } from '../../../../entities/Profile'

const data = {
    username: 'admin',
    age: 34,
    country: Country.Russia,
    lastname: 'test',
    first: 'asd',
    city: 'Moskow',
    currency: Currency.EUR
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toStrictEqual({ readonly: true })
    })
    test('test set edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toStrictEqual({ readonly: true, validateErrors: undefined, data, form: data })
    })
    test('test set updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '213' }))).toStrictEqual({ form: { username: '213' } })
    })
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toStrictEqual({ isLoading: true, validateErrors: undefined })
    })
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true }
        // @ts-nocheck
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toStrictEqual({ isLoading: false, validateErrors: undefined, readonly: true, form: data, data })
    })
})
